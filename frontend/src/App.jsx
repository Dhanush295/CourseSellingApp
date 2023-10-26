import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import AppBar from "../components/Appbar";
import Home from "../components/users/Home";
import Login from "../components/users/Login";
import PurchasedCourse from "../components/users/purchasedCourse";
import Signup from "../components/users/Signup";
import './App.css';
import CreateCourses from "../components/admin/CreateCourses";
import AdminLogin from "../components/admin/AdminLogin";
import AdminSignup from "../components/admin/AdminSignup";
import UpdateCourse from "../components/admin/updateCourse";
import AdminCourses from "../components/admin/AdminCourses";
import UserCourse from "../components/users/UserCourses";   
import * as React from 'react';

function App() {
    return (
    <div style={{width: "100vw", height: "100vh",backgroundRepeat: "no-repeat"}}>
      <Router>
        <AppBar></AppBar>
          <Routes>
            <Route path ={"/"} element={<Home/>}></Route>
            <Route path ={"/login"} element={<Login/>}></Route>
            <Route path ={"/purchasedCourse"} element={<PurchasedCourse/>}></Route>
            <Route path ={"/signup"} element={<Signup/>}></Route>
            <Route path ={"/admincourses"} element={<AdminCourses/>}></Route>
            <Route path ={"/createcourses"} element={<CreateCourses/>}></Route>
            <Route path ={"/adminlogin"} element={<AdminLogin/>}></Route>
            <Route path ={"/adminsignup"} element={<AdminSignup/>}></Route>
            <Route path ={"/courses"} element={<UserCourse/>}></Route>
            <Route path ={"/course/:courseId"} element={<UpdateCourse/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App