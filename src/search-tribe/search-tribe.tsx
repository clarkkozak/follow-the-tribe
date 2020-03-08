import React from 'react'
import { Typography, TextField, Button } from '@material-ui/core'

function SearchTribe() {
  return (
    <>
      <Typography style={{ marginBottom: 16 }} variant="h2" component="h1" align="center">
        Follow The Tribe
      </Typography>
      <form>
        <TextField
          required
          defaultValue="tribesteemup"
          type="search"
          variant="filled"
          id="tribe-search"
          placeholder="tribesteemup"
          autoComplete="tribesteemup"
          fullWidth
          label="Enter Tribe"
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 16
        }}>
          <div></div>
          <Button variant="contained" color="primary">
            Search
        </Button>
        </div>
      </form>
    </>
  )
}

export default SearchTribe
