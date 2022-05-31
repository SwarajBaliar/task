/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Button, Grid, Link, Paper, TextField  } from '@mui/material'
import React, { useState  } from "react";
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import LoginImg from '../../LoginImg/LoginImg';
 
import AppBar from '@mui/material/AppBar';
 
import TimeSheetImage from '../../Assets/Images/Time-tracking-apps.png'
import Toolbar from '@mui/material/Toolbar';
// import { MyImage } from './ImageElements';

function Login() {
    const history = useHistory()
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
    });
    const [hasError, setHasError] = useState();
    
    const handleChange = (e) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };
    
    const handleLogin = async (e) => {
        console.log("clicked!!");
        e.preventDefault();
        if (userDetails.username === "" ||userDetails.password === "") {
            setHasError("All filled are Mandatory")
           setTimeout(() => {
            setHasError("");
           }, 3000);

           return;
        } 
        else{
            history.push("/DashboardSideBar");
        }

    }
    const paperStyle = { padding: 20, height: "40%", width: 330, marginLeft: "50%", marginTop: "10%" }
    const avatarStyle = { backgroundColor: "#181868" }

    
    return (
        <Grid >
            <AppBar position="fixed" style={{ background: '#224296 ' }}>
                <Toolbar >
                    <Grid className='container-fluid'>
                        <Grid className='row'>
                            
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            {/* <Header /> */}
            <Grid className='container-fluid'>
                <Grid className='row'>
                    <Grid className='col-md-6'>
                        <img src={TimeSheetImage} style={{ height: '100%', width: "100%", marginTop: '15%' }} />
                    </Grid>
                    <Grid className='col-md-6'>
                        <Grid container spacing={1} style={{ marginTop: '15%', marginLeft: '-30%' }}>
                            <Paper elevation={10} style={paperStyle}>
                                <Grid align="center">
                                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                                    <h2>Sign in</h2>
                                </Grid>
                                <form>
                                    <Grid >
                                        <TextField
                                            label="username"
                                            placeholder=" Enter username"
                                            variant='filled'
                                            onChange={ handleChange}
                                            name="username"
                                            value={userDetails.username}
                                            fullWidth required />
                                    </Grid>
                                    <Grid >
                                        <TextField
                                            className='mt-2'
                                            label="Password"
                                            placeholder=" Enter password"
                                            variant='filled'
                                            type="password"
                                            onChange={handleChange}
                                            name="password"
                                            value={userDetails.password}
                                            fullWidth required />
                                    </Grid>
                                    
                                    <p style={{ color: "red", fontSize: '15px' }}>{hasError}</p>
                                    <Button
                                        className='mt-2'
                                        style={{
                                            backgroundColor: "MidnightBlue",
                                        }}
                                        onClick={handleLogin}
                                        variant="contained"
                                        fullWidth> Sign in</Button>
                                </form>
                                

                            </Paper>
                        </Grid>
                     
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Login;