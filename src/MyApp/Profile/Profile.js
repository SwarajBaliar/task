import { Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
 
import Button from '@mui/material/Button';
import { PhotoCamera } from '@mui/icons-material';
 
import "../../Components/react-confirm-alert.css"
 
 
 

const Profile = (props) => {
  
  

return (
  <Box sx={{ flexGrow: 1, }} className='container-fluid' style={{ paddingBottom: '2%', paddingTop: '2%' }} >
    <Grid  >
      <Card sx={{ display: 'flex', bgcolor: 'F5F5F5' }} style={{ paddingBottom: '2%', paddingLeft: '3%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '0 0 auto' }}>
            <Avatar className='img-fluid' style={{ height: 101, width: 105 }}    starticon={<PhotoCamera />} >
           
            </Avatar>        
            
            <Grid className='row'>
              <Grid className='col-md-5' style={{
                borderRadius: '50% 50%', background: '#F5F5F5',
                padding: '1%', width: '30%', height: '60%', position: 'relative', left: '60%', marginTop: '-23%',
              }}>
                <Button variant="text"
                  component="label"
                  style={{ position: 'relative', left: '-37%' }}
                >
                  <PhotoCamera />
                  <input
                    type="file"
                    accept="image/*"
                    
                   
                    // onChange={uploadImage}
                    hidden />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
        
      </Card>
      <Typography component="div" variant="h5" className='mt-2 '>EMPLOYEE INFORMATION </Typography>
      <Paper style={{ paddingBottom: '2%', paddingLeft: '3%' }} >
         
        <Grid>
        </Grid>
        <Grid className='row'>
          <Grid className='col-md-6 col-sm-12'>
            <Typography>EMPLOYEE FIRSTNAME </Typography>

            <TextField
              id="standard-basic"
              style={{ width: '65%' }}
              variant="standard"
              disabled name='officialMail'
              className='mt-1'
              
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>
          <Grid className='col-md-6 col-sm-12'>
            <Typography> EMPLOYEE LASTNAME</Typography>
            <TextField
              id="standard-basic"
              style={{ width: '65%', }}
              variant="standard"
              disabled
              name='clientEmailId'
              className='mt-1 '
              InputLabelProps={{
                shrink: true,
              }}
             
            
            />
          </Grid>
        </Grid>
         
       
         
      </Paper>

       
        
    </Grid>
  </Box>
)
}

export default Profile