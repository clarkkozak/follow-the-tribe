import React from 'react'
import { Typography, TextField, Button, Grid } from '@material-ui/core'
const username = process.env.REACT_APP_STEEM_USER


const SearchTribe: React.FC = () => {
  return (
    <>
      <Typography style={{ marginBottom: 16 }} variant="h2" component="h1" align="center">
        Hello {username}!
      </Typography>
      <form>
        <TextField
          required
          defaultValue="abundance.tribe"
          type="search"
          variant="filled"
          id="tribe-search"
          placeholder="abundance.tribe"
          autoComplete="abundance.tribe"
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
