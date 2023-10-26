import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, Button } from "@mui/material";
import { json } from "react-router-dom";


function UserCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await axios.get("http://localhost:3000/users/courses", {
          headers: {
            "authorization": localStorage.getItem("key")
          }
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    getCourses();
  }, []);

  return (
    <div >
        <div style={{display:"flex", margin:50, justifyContent:"center", flexWrap: "wrap"}}>
            { courses.map((course) => (<DisplayCourse key={course.id} course={course} /> ))}
        </div>
      
      <div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"></link>

      <footer>
            
        <div class="footer">
        <div class="row">
        <a href="facebook.com"><i class="fa fa-facebook"></i></a>
        <a href="instagram.com"><i class="fa fa-instagram"></i></a>
        <a href="youtube.com"><i class="fa fa-youtube"></i></a>
        <a href="twitter.com"><i class="fa fa-twitter"></i></a>
        </div>

        <div class="row">
        <ul>
        <li><h4>Career</h4></li>
        <li><h4>Contact us</h4></li>
        <li><h4>Our Services</h4></li>
        <li><h4>Privacy Policy</h4></li>
        <li><h4>Terms & Conditions</h4></li>
        </ul>
        </div>
        </div>
        </footer>
        
      </div>
    </div>

  );
}

function DisplayCourse({ course }) {

  const handleSubmit = async()=>{
    try{
      const response = await axios.post("http://localhost:3000/users/courses/"+ course._id, null,{
        headers:{
          "authorization": localStorage.getItem("key")
        }
      } )
      alert(JSON.stringify(response.data))
    }

    catch(error){
      console.log(error)
    }
  };


  return (<Card variant="outlined"
  style={{margin: 10,
          width: 300,
          minHeight: 200
          }}>
      <Typography style={{textAlign: "center", marginTop: 10}} variant='h4'>{course.title}</Typography>
      <Typography style={{textAlign: "center", }} variant='h5'>{course.description}</Typography>
      <img src={course.link} style={{width: 280, margin: 10}}/>
      <div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
          <Typography variant='h6'>${course.price}</Typography>
          <Button variant="contained" onClick={handleSubmit}>Buy Course</Button>                     
      </div>
      
  </Card>
  );
}

export default UserCourse;
