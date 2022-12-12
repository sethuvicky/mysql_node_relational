  const jwt = require("jsonwebtoken");
const {Users} = require("../models")


exports.isAuthenticatedUser =  (async (req,res,next) =>{
    const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login for access this resource", 401));
  }
   const decodedData = jwt.verify(token, 'importantsecretToken');


  req.user = await User.findbyPK(decodedData.id);
console.log(req.user)


  next();
});

 