import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, Button } from "@mui/material";

function PurchasedCourse() {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPurchasedCourses() {
            try {
                const response = await axios.get("http://localhost:3000/users/purchasedCourse", {
                    headers: {
                        "authorization": localStorage.getItem("key")
                    }
                });
                setPurchasedCourses(response.data.purchasedCourses);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPurchasedCourses();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {purchasedCourses.map((courseId) => (
                        <CourseDetails key={courseId} courseId={courseId} />
                    ))}
                </div>
            )}
        </div>
    );
}


function CourseDetails({ courseId }) {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        async function fetchCourseDetails() {
            try {
                const response = await axios.get(`http://localhost:3000/users/course/${courseId}`, {
                    headers: {
                        "authorization": localStorage.getItem("key")
                    }
                });
                console.log(response.data.course)
                setCourse(response.data.course)
                
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourseDetails();
    }, [courseId]);

    return (
       <div>
        <Card variant="outlined"style={{margin: 10,
          width: 300,
          minHeight: 200
          }}>
            <Typography style={{textAlign: "center", marginTop: 10}} variant='h4'>{course.title}</Typography>
            <Typography style={{textAlign: "center", }} variant='h5'>{course.description}</Typography>
            <img src={course.link} style={{width: 280, margin: 10}}/>
            <div style={{display: "flex", justifyContent: "center", margin: 10}}>
                <Button variant="contained" >play</Button>                     
            </div>
         </Card>
       </div>
    );
}

export default PurchasedCourse;
