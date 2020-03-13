import React from 'react'

import {
  Typography,
  Grid,
  Button,
  List
} from '@material-ui/core'

import Member from './member';

const FollowTribe: React.FC = () => {
  const [members] = React.useState(['memeber1', 'member2', 'member3'])
  const [amount] = React.useState(1000)

  const handleSubmit: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <>
      <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
        Members:
        </Typography>
      <form onSubmit={handleSubmit}>
        <List style={{ overflow: 'auto', height: 200 }} aria-label="list of memebers">
          { 
            members.map(member => {
              return <Member key={member} member={member} />
            })
          }
        </List>
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
