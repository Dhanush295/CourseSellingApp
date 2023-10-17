import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import AppBar from "../components/Appbar";
import Home from "../components/users/home";
import Login from "../components/users/login";
import PurchasedCourse from "../components/users/purchasedCourse";
import Signup from "../components/users/Signup";
import './App.css'
import CreateCourses from "../components/admin/CreateCourses";
import AdminLogin from "../components/admin/AdminLogin";
import AdminSignup from "../components/admin/AdminSignup";
import UpdateCourse from "../components/admin/updateCourse";
import Courses from "../components/admin/courses";


function App() {
  

  return (
    
      <Router>
        <AppBar />
        <Routes>
          <Route path ={"/"} element={<Home/>}></Route>
          <Route path ={"/login"} element={<Login/>}></Route>
          <Route path ={"/purchasedCourse"} element={<PurchasedCourse/>}></Route>
          <Route path ={"/signup"} element={<Signup/>}></Route>
          <Route path ={"/courses"} element={<Courses/>}></Route>
          <Route path ={"/createcourses"} element={<CreateCourses/>}></Route>
          <Route path ={"/adminlogin"} element={<AdminLogin/>}></Route>
          <Route path ={"/adminsignup"} element={<AdminSignup/>}></Route>
          <Route path ={"/updatecourse"} element={<UpdateCourse/>}></Route>
        </Routes>
      </Router>
    

  );
}

export default App