import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
function AppBar() {
    const navigate = useNavigate();

    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}> 
            <div style={{padding: 10, color:"#4657ea", fontWeight: 'bolder'}}>
                <Typography variant="h4" component="h2">Course App</Typography>
            </div>
            <div style={{display: 'flex', padding: 10}}>
                <div style={{padding: 10}}>
                    <Button variant="contained" onClick={()=>{navigate("/signup")}}>Signup</Button>
                </div>
                <div style={{padding: 10}}>
                    <Button variant="contained" onClick={()=>{navigate("/login")}}>Login</Button>
                </div> 
            </div>
        </div>
    )
}

export default AppBar;