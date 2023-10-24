import * as React from 'react';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import axios from "axios";

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

    return <div>
        {courses.map(course=> <DisplayCourse course = {course} />)}
        
    </div>
        
    
}

function DisplayCourse(props){
    return(
        <div>
            <Card variant="outlined"
            style={{margin: 10,
                    width: 300,
                    minHeight: 200
                    }}>
                <Typography style={{textAlign: "center", marginTop: 10}} variant='h4'>{props.course.title}</Typography>
                <Typography style={{textAlign: "center", }} variant='h5'>{props.course.description}</Typography>
                    <img src={props.course.link} style={{width: 300}}/>
            </Card>
             </div>
    
    );
}

export default Courses;