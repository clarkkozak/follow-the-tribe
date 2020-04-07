import React from 'react'
import {
  ListItem,
  ListItemText,
  Checkbox
} from '@material-ui/core'

interface MemberProps {
  member: string,
  selected: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {}
}

const Member: React.FC<MemberProps> = ({ member, selected, onChange }) => {
  return (
    <ListItem button>
      <ListItemText primary={member} />
      <Checkbox
        checked={selected}
        onChange={onChange}
        value={member}
        inputProps={{ 'aria-label': `${member} is listed in this hive group` }}
      />
    </ListItem>
  )
}
export default Member
