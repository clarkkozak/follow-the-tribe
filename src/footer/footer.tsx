import React from 'react'
import { Typography, Link } from '@material-ui/core'

function Footer() {
  return (
    <footer>
      <Typography align="center" style={{ marginTop: 24 }} variant="body2">
        Check out the source code here: <Link href="https://github.com/clarkkozak/follow_the_tribe">Github</Link>
      </Typography>
    </footer>
  )
}
export default Footer
