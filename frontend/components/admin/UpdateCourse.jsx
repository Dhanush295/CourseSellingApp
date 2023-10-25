
import * as React from 'react';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
        <div >
            <GreyTopper title = {courses.title}/>
            <Grid Container>
                <Grid item lg={8} md={12} sm={12}>
                    <UpdateCard courses={courses} setCourses={setCourses} />
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <CourseCard courses={courses} />
                </Grid>
            </Grid>        
    </div>         
    );
}

function GreyTopper({title}){
    return(
        <div style={{height: 250, background:"#212121", top:0, width:"100vw", zIndex:0, marginBottom: -250}}>
            <div style={{height: 250, display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <div>
                    <Typography style={{ color: "white", fontWeight: 600}} variant='h3' textAlign={'center'}>
                        {title}
                    </Typography>
                </div>

            </div>

        </div>
    );
}

function UpdateCard({courses, setCourses}){
    const [ title , setTitle ] = React.useState(courses.title);
    const [ description, setDescription ] = React.useState(courses.description);
    const [link, setLink ] = React.useState(courses.link);
    const [ price, setPrice ] = React.useState(courses.price);

        const handleSubmit = async()=> {
        const response = await axios.put('http://localhost:3000/admin/courses/' + courses._id, {title, description,price,link},{
            headers: {
                'Content-Type':'application/json'
            }})
        setCourses(response.data)
        }
        
        return(
            <div style={{ display:"flex",justifyContent:"start", marginLeft:50}}>
                <Card variant="outlined" style={{maxWidth: 600, marginTop: 300}}>
                    <div style={{padding: 20}}>
                        <Typography variant='h5' textAlign={"center"}>Update Course</Typography>
                        <TextField
                        margin="normal"
                        value={title}
                        required
                        fullWidth
                        id="Title"
                        type="Title"
                        label="Title"
                        name="Title"
                        onChange={(e)=>{ setTitle(e.target.value)}}
                        autoComplete="current-Title"
                        autoFocus
                        
                        />
                        <TextField
                        margin="normal"
                        value={description}
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
                        value={link}
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
                        value={price}
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
                    </div>
                </Card>

            </div>
            
        );

}


function CourseCard({courses}){
    return (
        <div style={{ display:"flex",justifyContent:"end", marginRight: 50, marginTop:50}}>
            <Card variant="outlined" style={{ width: 300 }}>
                <img src={courses.link} style={{ width: 280, margin: 10 }} />
                <Typography style={{ textAlign: "center", marginTop: 5 }} variant="h4">
                {courses.title}
                </Typography>
                <Typography style={{ textAlign: "center" }} variant="h5">
                {courses.description}
                </Typography>
                <Typography marginBottom={2} textAlign={"center"} variant="h6">
                Price: ${courses.price}
                </Typography>
            </Card>
        </div>
    );
}

export default UpdateCourse;