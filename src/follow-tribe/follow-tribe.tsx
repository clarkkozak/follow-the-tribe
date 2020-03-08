import React from 'react'

import {
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@material-ui/core'


function FollowTribe() {

  const [checked, setChecked] = React.useState(true);
  const [checkedTwo, setCheckedTwo] = React.useState(true);
  const [amount, setAmount] = React.useState(1000)

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTwo(event.target.checked)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };


  return (
    <>
      <Typography variant="h3" component="h2" align="center" style={{ marginTop: 16 }}>
        Memebers:
        </Typography>
      <form>
        <List style={{ overflow: 'auto', height: 200 }} aria-label="list of memebers">
          <ListItem button>
            <ListItemText primary="@username1" />
            <Checkbox
              checked={checked}
              onChange={handleChange}
              value="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="@username2" />
            <Checkbox
              checked={checkedTwo}
              onChange={handleChangeTwo}
              value="something_eles"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="@username1" />
            <Checkbox
              checked={checked}
              onChange={handleChange}
              value="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="@username2" />
            <Checkbox
              checked={checkedTwo}
              onChange={handleChangeTwo}
              value="something_eles"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </ListItem>
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
