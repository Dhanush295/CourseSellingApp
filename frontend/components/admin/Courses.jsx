import * as React from 'react';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import {Navigate, useNavigate } from 'react-router-dom';

function Courses() {
    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const response = await axios.get("http://localhost:3000/admin/courses", {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.data){
                setCourses(response.data.courses);
            }
        }
        fetchdata();
    }, []) ;

    return <div style={{display:"flex",marginTop: 70 ,flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course=> <DisplayCourse course = {course} />)}
        
    </div>
        
    
}

export function DisplayCourse(props){
    const navigate = useNavigate();
    return(
        
            <Card variant="outlined"
            style={{margin: 10,
                    width: 300,
                    minHeight: 200
                    }}>
                <Typography style={{textAlign: "center", marginTop: 10}} variant='h4'>{props.course.title}</Typography>
                <Typography style={{textAlign: "center", }} variant='h5'>{props.course.description}</Typography>
                <img src={props.course.link} style={{width: 280, margin: 10}}/>
                <div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
                    <Button variant="contained" >Delete</Button>
                    <Button variant="contained" onClick={() => navigate(`/course/${props.course._id}`)}>Update</Button>
                </div>
                
            </Card>
             
    
    );
}

export default Courses;