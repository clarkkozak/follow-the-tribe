import React from 'react'
import { Typography, TextField, Button, Grid } from '@material-ui/core'

const SearchTribe: React.FC = () => {
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
        <Grid container
          justify="flex-end"
          style={{
            marginTop: 16
          }}
        >
          <Button variant="contained" color="primary">
            Search
        </Button>
        </Grid>
      </form>
    </>
  )
}

export default SearchTribe
