import React  from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Grid,
} from '@material-ui/core'

interface KeyPromptProps {
  onPrompt: (event: React.MouseEvent<HTMLButtonElement>, postingKey: string, username: string) => {},
  open: boolean
}

const KeyPrompt: React.FC<KeyPromptProps> = ({ onPrompt, open }) => {
  const [postingKey, setPostingKey] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handlePostingKey: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostingKey(event.target.value)
  }

  const handleUsername: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleReportToDev = () => {
    window.location.replace('https://github.com/clarkkozak/follow_the_tribe/issues/')
  };

  return (
    <div>
      <Dialog open={open} onClose={handleReportToDev} aria-labelledby="form-dialog-title">
        <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">Welcome!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your attention! This app is to help Hive users to follow an entire community or tribe!
            Currently, you can only follow abundance.tribe! Check out the code <Link href="https://github.com/clarkkozak/follow_the_tribe">here.</Link> I'm open to suggestions!
          </DialogContentText>
          <DialogContentText style={{ marginTop:8 }} color="secondary">
            This app can only works with your EXACT username (case sensative) and public posting key.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsername}
          />
          <TextField
            margin="dense"
            id="key"
            label="Private Posting Key"
            type="text"
            fullWidth
            value={postingKey}
            onChange={handlePostingKey}
          />
        </DialogContent>
        <DialogActions>
          <Grid container justify="space-between" style={{  padding: 16 }}>
            <Grid item>
              <Button onClick={handleReportToDev} color="secondary">
                Report To Dev
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={(event) => onPrompt(event, postingKey, username)} color="primary">
                Confirm Key
              </Button>  
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default KeyPrompt
