import { useEffect, useState } from "react";
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
                // setCourses(response.data);
                console.log(response.data.courses);
            }
        }
        fetchdata();
    }, []) ;



    return
}

export default Courses;