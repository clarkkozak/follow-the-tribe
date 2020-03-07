import React from 'react'
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox
} from '@material-ui/core'



function App() {
  const [checked, setChecked] = React.useState(true);
  const [checkedTwo, setCheckedTwo] = React.useState(true);

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTwo(event.target.checked)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };

  return (
    <>
      <Typography style={{ marginBottom: 16 }} variant="h2" component="h1" align="center">
        Follow The Tribe
      </Typography>
      <Container maxWidth="sm" fixed>
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
            label="Enter Tribe" />
          <Button style={{ marginTop: 16 }} variant="contained" color="primary">
            Search
        </Button>
        </form>
        <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
          Memebers:
        </Typography>
        <form>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Memeber 1" secondary="something more" />
              <Checkbox
                checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Memeber 2" secondary="something more" />
              <Checkbox
                checked={checkedTwo}
                onChange={handleChangeTwo}
                value="something_eles"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItem>
          </List>
          <Button style={{ marginTop: 16 }} variant="contained" color="secondary">
            Follow
        </Button>
        </form>
      </Container>

    </>
  );
}

export default App
