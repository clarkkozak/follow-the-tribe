import React from 'react'
import {
  ListItem,
  ListItemText,
  Checkbox
} from '@material-ui/core'

interface MemberProps {
  member: string,
}

const Member: React.FC<MemberProps> = ({ member }) => {
  return (
    <ListItem button>
      <ListItemText primary={member} />
      <Checkbox
        // checked={checked}
        // onChange={handleChange}
        value="something_eles"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </ListItem>
  )
}
export default Member
