import  jwt  from "jsonwebtoken"
import config from "../config.js";
function userMiddleware(req,res,next){
 
 const authHeader=req.headers.authorization;
 //console.log( authHeader)
    if(!authHeader || !authHeader.startsWith("Bearer"))
    {
        return res.status(401).json({error:"no token  provided"}); 
    }
    const token=authHeader.split(" ")[1];
  //  console.log( "token" +token)
    try {
        const decoded=jwt.verify(token,config.JWT_USER_PASSWORD)
      //  console.log( " decoded" +  decoded)
        req.userId=decoded.id;
        next();

        
    } catch (error) {
        return res.status(401).json({error:"invaild token or  expired"});
      console.log("error in user middleware,error");
       
    } 
}
export default userMiddleware;