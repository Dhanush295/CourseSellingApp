import React from 'react';
import backgroundimage from "./images/back1.jpg";
import google from "./images/google.jpg";
import apple from "./images/apple_logo.png";
import csudh from "./images/csudh.png";
import csulb from "./images/csulb.jpeg";
import meta from "./images/meta.jpg";
import ibm from "./images/ibm.jpg";
import tesla from "./images/tesla.png";
import uber from "./images/Uber.png";
import study from "./images/study.jpg";
import Card from '@mui/material/Card'; // Import the Card component
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "./home.css";


function Home() {
  return (
    <div>
      <div>
        <img src={backgroundimage} style={{ width: '100vw', height: "80vh" }} alt="Background" />
      </div>
      <div style={{ width: "100vw" }}>
        <Typography textAlign={"center"} variant='h4'>We Collaborate with 300+ Companies to get you the best courses possible</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap:"wrap" }}>
        <img style={{ padding: 10 }} width={100} src={google} alt="Google" />
        <img style={{ padding: 10 }} width={100} src={apple} alt="Apple" />
        <img style={{ padding: 10 }} width={100} src={ibm} alt="IBM" />
        <img style={{ padding: 10 }} width={100} src={csudh} alt="CSUDH" />
        <img style={{ padding: 10 }} width={100} src={meta} alt="Meta" />
        <img style={{ padding: 10 }} width={100} src={tesla} alt="Tesla" />
        <img style={{ padding: 10 }} width={100} src={csulb} alt="CSULB" />
        <img style={{ padding: 10 }} width={100} src={uber} alt="Uber" />
      </div>
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
      <Card variant="outlined" style={{ margin:50, width: 300, minHeight:200 }}>
            <img src={study} style={{ width: 280, margin: 10 }} />
            <Typography style={{ textAlign: "center", marginTop: 5 }} variant="h4">
            HIIIII
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
            How are you
            </Typography>
            <Typography marginBottom={2} textAlign={"center"} variant="h6">
            What you doing?
            </Typography>
        </Card>
        <Card variant="outlined" style={{ margin:50, width: 300, minHeight:200 }}>
            <img src={study} style={{ width: 280, margin: 10 }} />
            <Typography style={{ textAlign: "center", marginTop: 5 }} variant="h4">
            HIIIII
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
            How are you
            </Typography>
            <Typography marginBottom={2} textAlign={"center"} variant="h6">
            What you doing?
            </Typography>
        </Card>
        <Card variant="outlined" style={{ margin:50, width: 300, minHeight:200 }}>
            <img src={study} style={{ width: 280, margin: 10 }} />
            <Typography style={{ textAlign: "center", marginTop: 5 }} variant="h4">
            HIIIII
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
            How are you
            </Typography>
            <Typography marginBottom={2} textAlign={"center"} variant="h6">
            What you doing?
            </Typography>
        </Card>
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

export default Home;
