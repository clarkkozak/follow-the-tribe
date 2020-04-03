import React from 'react'
import { Container, Paper } from '@material-ui/core'

import SearchTribe from '../search-tribe/search-tribe'
import FollowTribe from '../follow-tribe/follow-tribe'
import Footer from '../footer/footer'

import { 
  ThemeProvider, 
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" fixed>
        <Paper elevation={5} style={{ padding: 32, marginTop: 16 }}>
          <SearchTribe />
          <FollowTribe />
        </Paper>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App