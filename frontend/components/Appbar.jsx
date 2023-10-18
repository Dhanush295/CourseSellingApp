import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
function AppBar() {
    const navigate = useNavigate();
    const [username , setUsername ] = React.useState(null);
    const [ isLoading, setLoading ] = React.useState(true)

    React.useEffect(() => {
        async function fetchdata(){
            const response = await axios.get("http://localhost:3000/users/me", {
                headers: {
                    "authorization": localStorage.getItem("key")
                }
            });
            if(response.data.username){
                setUsername(response.data.username);
                setLoading(false)
            }
        }
        fetchdata();
    }, []);

    if(isLoading){
        return <div></div>
    }

    if (username){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <div style={{padding: 10, color:"#4657ea", fontWeight: 'bolder'}}>
                    <Typography variant="h4" component="h2">Course App</Typography>
                </div>
                <div style={{display: 'flex', padding: 10}}>
                    <div style={{padding: 10}}>
                    <Button disabled>{username}</Button>
                    </div>
                    <div style={{padding: 10}}>
                        <Button variant="contained" 
                        onClick={()=> {localStorage.setItem("key", null); 
                        window.location = '/'}}
                         >Logout</Button>
                    </div> 
                </div>
            </div>
        )
    }

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