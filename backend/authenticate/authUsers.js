const jwt = require("jsonwebtoken");

const SECRET = "CourseSEllingAppJWTtoken";

const authJwt = async (req, res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(token){
        const decodedToken = jwt.verify(token,SECRET);
        if (decodedToken) {
            req.user = decodedToken;
            next();
          }
          
        else{
            return res.status(400).json({message: "Authentication failed"})
        }
    }
    else{
        return res.status(401).json({success:false, message: "Error!Token was not provided."});
    }   
}

module.exports = { authJwt, SECRET};