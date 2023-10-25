
import * as React from 'react';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const defaultTheme = createTheme();

function UpdateCourse() {

    let {courseId} = useParams();

    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const response = await axios.get("http://localhost:3000/admin/courses/" + courseId, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data.course)
            if(response.data){
                setCourses(response.data.course);
            }
        }
        fetchdata();
    }, []) ;

    if(!courses){
        return <div>
            loading...
        </div>
    }

    return(     
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "nowrap" }}>
            <UpdateCard course={courses} />
            <CourseCard course={courses} />
</div>   
        
       
    );
}

function UpdateCard(props){
    const [ title , setTitle ] = React.useState('');
    const [ description, setDescription ] = React.useState('');
    const [link, setLink ] = React.useState('');
    const [ price, setPrice ] = React.useState('');
    const course = props.course

        const handleSubmit = async()=> {
        const response = await axios.put('http://localhost:3000/admin/courses/' + course._id, {title, description,price,link},{
            headers: {
                'Content-Type':'application/json'
            }})
        console.log(response.data);
        }
        
        return(
            <div style={{ display:"flex",
             border: 300 ,
             maxWidth: 500,
             marginTop: 50, 
             marginLeft:200}}>

                <Card variant="outlined" style={{width: 400, padding:20, minHeight: 200}}>
                    <Typography variant='h5' textAlign={"center"}>Update Course</Typography>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Title"
                    label="Title"
                    name="Title"
                    onChange={(e)=>{ setTitle(e.target.value)}}
                    autoComplete="Title"
                    autoFocus
                    
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="description"
                    type="description"
                    id="description"
                    onChange={(e)=>{ setDescription(e.target.value)}}
                    autoComplete="current-description"
                    />
                    <TextField
                    margin="link"
                    required
                    fullWidth
                    name="link"
                    label="Link"
                    type="link"
                    onChange={(e)=>{setLink(e.target.value)}}
                    id="link"
                    autoComplete="current-link"
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="price"
                    id="price"
                    onChange={(e)=>{setPrice(e.target.value)}}
                    autoComplete="current-price"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit} 
                    >
                    Update Course
                    </Button>
                </Card>

            </div>
            
        );

}


function CourseCard(props){
    return (
        <div style={{ marginRight: 200, marginTop: 50, minHeight: 200 }}>
            <Card variant="outlined" style={{ width: 300 }}>
                <img src={props.course.link} style={{ width: 280, margin: 10 }} />
                <Typography style={{ textAlign: "center", marginTop: 5 }} variant="h4">
                {props.course.title}
                </Typography>
                <Typography style={{ textAlign: "center" }} variant="h5">
                {props.course.description}
                </Typography>
                <Typography marginBottom={2} textAlign={"center"} variant="h6">
                Price: ${props.course.price}
                </Typography>
            </Card>
        </div>
    );
}

export default UpdateCourse;