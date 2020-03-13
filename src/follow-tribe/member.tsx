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
        checked={true}
        // onChange={handleChange}
        value={member}
        inputProps={{ 'aria-label': `${member} is listed in this steem group` }}
      />
    </ListItem>
  )
}
export default Member
