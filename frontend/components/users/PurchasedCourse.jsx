import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchCourseDetails() {
            try {
                const response = await axios.get(`http://localhost:3000/users/course/${courseId}`, {
                    headers: {
                        "authorization": localStorage.getItem("key")
                    }
                });
                
                setCourse(response.data.course);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourseDetails();
    }, [courseId]);

    return (
       <div>
        
        {course.title}
       </div>
    );
}

export default PurchasedCourse;
