import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList({ data }) {
  return (
    <Box sx={{ width: "100%", marginTop: '1rem', bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {data.map((text, index) => {
            return <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          })}
        </List>
      </nav>
    </Box>
  );
}
