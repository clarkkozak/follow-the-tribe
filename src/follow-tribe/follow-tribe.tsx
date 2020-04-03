import React, { useState } from 'react'
import { Client, PrivateKey } from 'dsteem';
import { Mainnet as NetConfig } from '../configuration'

import {
  Typography,
  Grid,
  Button,
  List,
  CircularProgress,
  Card
} from '@material-ui/core'


import Member from './member'

let opts = { ...NetConfig.net }

const DELAY = 2000
let timeout = 0 
const postingKey = process.env.REACT_APP_POSTING_KEY || ''
const username = process.env.REACT_APP_STEEM_USER

const client = new Client(NetConfig.url, opts);
const privateKey = PrivateKey.fromString(postingKey)


const FollowTribe: React.FC = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState([''])
  const [selectedMembers, setSelectedMembers] = useState(new Set(members))
  const [amount] = useState(1000)

  const getUserFollowing: any = async () => {

    const results = await fetch('https://api.steemit.com', {
      method: 'POST',
      body: `{"jsonrpc":"2.0", "method":"follow_api.get_following", "params":{"account":"${username}","start":null,"limit":205}, "id":1}`
    })
      .then(data => data.json())
      .catch(err => {
        setError(true)
        console.log('There was an error when fetching user followers: ' + err)
      })

    if (results) {
      const listOfUserFollowing = results.result.reduce((arr, current) => {
        return [...arr, current.following]
      }, [])

      return listOfUserFollowing
    } else {
      setError(true)
    }
    // console.log(results)
  }

  const handleFollow: any = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log('clicked follow')
    let follower = username
    const followMemberFunctions: any = []
    members.forEach(async (following) => {
      const json = JSON.stringify([
        'follow',
        {
          follower,
          following,
          what: ['blog'], //null value for unfollow, 'blog' for follow
        },
      ])

      const data: any = {
        id: 'follow',
        json: json,
        required_auths: [],
        required_posting_auths: [follower],
      }

      followMemberFunctions.push(() => client.broadcast.json(data, privateKey))
    })
    followMemberFunctions.push(setLoading)
    followMemberFunctions.forEach((fn, i) => {  
      console.log({ fn })
      if (i === 0) {
        fn(true)
        return
      }
      else if (i === followMemberFunctions.length -1) {
        fn(false)
        return
      } else {
        timeout = timeout + DELAY
        setTimeout(fn()
          .then(res => console.log(res))
          .catch(err => console.log(err))
        , timeout)
        return
      }
    })
  }

  const handleGetCommunity: any = async (callback: () => {}) => {
    const results = await fetch('https://api.steemit.com', {
      method: 'POST',
      body: '{"jsonrpc":"2.0", "method":"follow_api.get_following", "params":{"account":"tribesteemup","start":null,"limit":100}, "id":1}'
    })
      .then(data => data.json())
      .catch(err => {
        setError(true)
        console.log('There was an error when fetching: ' + err)
      })

    setLoading(false)

    if (results) {
      const currentUserFollowers: any = await callback()
      let listOfMembers: any = results.result.reduce((arr, current) => {
        return [...arr, current.following]
      }, [])

      // Make sure you aren't already following this member
      // We don't want to unfollow them.
      const listOfNewFollowers: any = listOfMembers.filter(newFollower => {
        return !currentUserFollowers.includes(newFollower) 
      })

      console.log({currentUserFollowers, listOfMembers, listOfNewFollowers})
      setMembers(listOfNewFollowers)
      setSelectedMembers(new Set(listOfNewFollowers))
    } else {
      setError(true)
    }
  }

  const handleChange: any = (member: string, value: boolean) => {
    const newSelectedMembers: any = new Set(selectedMembers)

    if (value) {
      newSelectedMembers.add(member)
    } else {
      newSelectedMembers.delete(member)
    }

    setSelectedMembers(newSelectedMembers)
  }


  React.useEffect(() => {
    handleGetCommunity(getUserFollowing)
  }, [])

    if (loading) {
      return (
        <Grid container justify="center" style={{ marginTop: 16 }}>
         <CircularProgress color="secondary" />
        </Grid>
      )
    }

  if (members.length === 0) {
    return (
      <Grid container justify="center" style={{ marginTop: 16 }}>
      <Card>
          <Typography align="center" style={{ padding: 16 }}>Congratulations! You are following all the members in this community!</Typography>
      </Card>
    </Grid>
  )
  }

  return (
    <>
      <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
        Members:
        </Typography>
      <form onSubmit={handleFollow}>
        {error && <Typography variant="h5" align="center" style={{ marginTop: 16, marginBottom: 16 }}>Unable to Reach Steem API</Typography>}
        {
          !error && loading
            ?
            <div></div>
            :
            <List style={{ overflow: 'auto', height: 200 }} aria-label="list of members">
              {
                members.map((member: string) => (
                  <Member
                    key={member}
                    member={member}
                    selected={selectedMembers.has(member)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(member, event.target.checked)}
                  />
                ))
              }
            </List>
        }
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction="row"
          style={{
            marginTop: 16
          }}>
          <Grid item>
            <Typography>
              Steem Needed: {amount}
            </Typography>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="secondary">
              Follow
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default FollowTribe
