import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'

import SearchTribe from '../search-tribe/search-tribe'
import FollowTribe from '../follow-tribe/follow-tribe'

function App() {

  return (
    <>
      <Container maxWidth="sm" fixed>
        <Paper elevation={5} style={{ padding: 32, marginTop: 16 }}>
          <SearchTribe />
          <FollowTribe />
        </Paper>
        <footer>
          <Typography align="center" style={{ marginTop: 24 }} variant="body2">
            Learn more aobut the project here!
        </Typography>
        </footer>
      </Container>
    </>
  )
}

export default App
