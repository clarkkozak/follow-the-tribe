import React from 'react'
import { Container, Paper } from '@material-ui/core'
import { PrivateKey } from 'dsteem'

import SearchTribe from '../search-tribe/search-tribe'
import FollowTribe from '../follow-tribe/follow-tribe'
import KeyPrompt from '../key-prompt/key-prompt'
import Footer from '../footer/footer'

import { 
  ThemeProvider, 
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  const [privateKey, setPrivateKey] = React.useState({})
  const [username, setUsername] = React.useState('user ')
  const [open, setOpen] = React.useState(false);
  const [hasInputed, setHasInputed] = React.useState(false);


  React.useEffect(() => {
    const handlePrivateKey: any = () => {
      if (Object.entries(privateKey).length === 0) {
        setOpen(true)
      } else {
        setOpen(false)
        setHasInputed(true)
      }
    }
    handlePrivateKey()
  }, [privateKey])

  const handleConfirmPrompt: any = (event: React.MouseEvent<HTMLButtonElement>, postingKey: string, username: string) => {
    event.preventDefault()
    const privateKey = PrivateKey.fromString(postingKey)
    setUsername(username)
    setPrivateKey(privateKey)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" fixed>
          <KeyPrompt onPrompt={handleConfirmPrompt} open={open}/>
          <Paper elevation={5} style={{ padding: 32, marginTop: 16 }}>
            <SearchTribe />
            { hasInputed &&
              <FollowTribe privateKey={privateKey} username={username} />
            }
          </Paper>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App