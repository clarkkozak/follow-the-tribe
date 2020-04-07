import React from 'react'
import { Typography, TextField, Button, Grid } from '@material-ui/core'

interface SearchTribeProps {
  username: string
}

const SearchTribe: React.FC<SearchTribeProps> = ({ username }) => {
  return (
    <>
      <Typography style={{ marginBottom: 16 }} variant="h2" component="h1" align="center">
       {username ? `Hello ${username}!` : 'Hello!'}
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
          disabled
        />
        <Grid container
          justify="flex-end"
          style={{
            marginTop: 16
          }}
        >
          <Button disabled variant="contained" color="primary">
            Search
        </Button>
        </Grid>
      </form>
    </>
  )
}

export default SearchTribe
