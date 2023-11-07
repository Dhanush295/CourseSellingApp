import * as React from 'react';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import {Navigate, useNavigate } from 'react-router-dom';

function AdminCourses() {
    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const response = await axios.get("http://localhost:3000/admin/courses", {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("key")
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
    const handledelete = async(courseId) =>{
        try {
            
            await axios.delete(`http://localhost:3000/admin/courses/${courseId}`, {
              headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("key")
              },
        });
    } catch (error) {
        console.error('Error deleting course:', error);
      }
    };
    
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
                    <Typography variant='h6'>${props.course.price}</Typography>
                    <Button variant="contained" onClick={() => navigate(`/course/${props.course._id}`)}>Update</Button>
                    <Button variant="contained" onClick = {()=>{handledelete(props.course._id)}} >Delete</Button>                     
                </div>
                
            </Card>
             
    
    );
}

export default AdminCourses;