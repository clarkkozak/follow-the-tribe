import React from 'react'

import {
  Typography,
  Grid,
  Button,
  List
} from '@material-ui/core'
import Member from './member';

const memebers: string[] = ['memeber1', 'member2', 'member3']

const FollowTribe: React.FC = () => {

  const [amount] = React.useState(1000)

  return (
    <>
      <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
        Members:
        </Typography>
      <form>
        <List style={{ overflow: 'auto', height: 200 }} aria-label="list of memebers">
          { 
            memebers.map(member => {
              return <Member member={member} />
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
            <Button variant="contained" color="secondary">
              Follow
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default FollowTribe
