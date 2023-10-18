const jwt = require("jsonwebtoken");

const SECRET = "CourseSEllingAppJWTtoken";

const authJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader;
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };

module.exports = { authJwt, SECRET};