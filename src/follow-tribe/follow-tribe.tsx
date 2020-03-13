import React, { useState } from 'react'

import {
  Typography,
  Grid,
  Button,
  List,
  CircularProgress
} from '@material-ui/core'

import Member from './member'

const FollowTribe: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState([''])
  const [selectedMembers, setSelectedMembers] = useState(new Set(members))
  const [amount] = useState(1000)

  const handleGetMember = async () => {
    const results = await fetch('https://api.steemit.com', {
      method: 'POST',
      body: '{"jsonrpc":"2.0", "method":"follow_api.get_following", "params":{"account":"tribesteemup","start":null,"limit":100}, "id":1}'
    })
      .then(data => data.json())
      .catch(err => {
        console.log('There was an error when fetching: ' + err)
      })

    const listOfMembers = results.result.reduce((arr, current) => {
      return [...arr, current.following]
    }, [])

    if (listOfMembers) {
      setMembers(listOfMembers)
      setSelectedMembers(new Set(listOfMembers))
      setLoading(false)
    }
  }

  React.useEffect(() => {
    handleGetMember()
  }, [])

  const handleSubmit: any = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log(selectedMembers)
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

  return (
    <>
      <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
        Members:
        </Typography>
      <form onSubmit={handleSubmit}>
        {loading && loading
          ?
          <Grid container justify="center" style={{ marginTop: 16 }}>
            <CircularProgress color="secondary" />
          </Grid>
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
