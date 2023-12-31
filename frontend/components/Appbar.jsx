import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
function AppBar() {
    const navigate = useNavigate();
    const [username , setUsername ] = React.useState(null);

    React.useEffect(() => {
        async function fetchdata(){
            const response = await axios.get("http://localhost:3000/users/me", {
                headers: {
                    "authorization": localStorage.getItem("key")
                }
            });
            if(response.data.username){
                setUsername(response.data.username);
            }
        }
        fetchdata();
    }, []);


    if (username){
        return(
            <div style={{display: 'flex',backgroundColor:"black", color:"white" ,justifyContent: 'space-between'}}> 
                <div style={{padding: 10, color:"white", fontWeight: 'bolder'}}>
                <Typography variant="h4" component="h2" onClick={() => navigate('/')}>Course App</Typography>

                </div>
                <div style={{display: 'flex', padding: 10}}>
                    <div style={{padding: 10}}>
                    <Typography color={"white"} variant='h5'>{username}</Typography>
                    </div>
                    <div style={{padding: 10}}>
                        <Button variant="contained" 
                        onClick={()=>{navigate("/courses")}}> 
                        Courses </Button>
                    </div>
                    <div style={{padding: 10}}>
                        <Button variant="contained" 
                        onClick={()=>{navigate("/purchasedCourse")}}> 
                        My Course </Button>
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
        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor:"black"}}> 
            <div style={{padding: 10, color:"white", fontWeight: 'bolder'}}>
                <Typography variant="h4" component="h2">Course App</Typography>
            </div>
            <div style={{display: 'flex', padding: 10}}>
                <div style={{padding: 10}}>
                    <Button variant="contained" onClick={()=>{navigate("/signup")}}>Register</Button>
                </div>
                <div style={{padding: 10}}>
                    <Button variant="contained" onClick={()=>{navigate("/login")}}>Login</Button>
                </div> 
            </div>
        </div>
    )
}

export default AppBar;