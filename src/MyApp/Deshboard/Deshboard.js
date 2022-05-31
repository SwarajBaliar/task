
/* eslint-disable jsx-a11y/alt-text */
import { styled } from '@mui/material/styles';
import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
 
import List from '@mui/material/List';
 
import Divider from '@mui/material/Divider';
 
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DashBoardProfile } from '../DeshBoardProfile/DeshBoardProfile';
import {   Button, } from '@mui/material';
 
 
  
 
 
 
 
import { Link } from 'react-router-dom';
const drawerWidth = 240;

 

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

 


 function DashboardSideBar() {
  
 
  
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  

 
  return (
    <Box sx={{ display: 'flex' ,bgcolor:'#CBD8DD'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background:'#224296 '}}>
        
      </AppBar>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:'#224296'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
       
        <List >  
        <Divider/>
          {DashBoardProfile.map((resp,index)=>(
            <ListItem   className='sidebarhover'>
                 <ListItemIcon style={{color:'white'}}>
                   {resp.icon}
                 </ListItemIcon>
                 <Link to={`${resp.route}`}  style={{textDecoration:'none'}}>
                 <Button style={{color:'white'}} className='sidebarhovers' >{resp.name}</Button>
                 </Link>
            </ListItem>
              ))}
        </List>
      
        <Divider/>
      </Drawer>
       
    </Box>
  );
}
export default DashboardSideBar