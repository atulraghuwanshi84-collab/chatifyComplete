import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { ENV} from "../lib/env.js";


export const socketAuthMiddleware = async (socket,next) => {

    try{
            const token = socket.handshake.headers.cookie?.split(";").find((row) => row.startsWith("jwt="))?.split("=")[1]; 
        
    if(!token){
        console.log("socket connection rejected : no token provided");
        return next(new Error("unauthorized - no Token provided"))
    }

    const decoded = jwt.verify(token,ENV.JWT_SECRET) ;
    if(!decoded){
        console.log("socket connection rejected : invalid token")
        return next(new Error("unauthorized - Invalid TOken")) ;

    }

    const user = await User.findById(decoded.userId).select("-password") ;
    if(!user){
        console.log("socket connection rejected: user not found") ;
        return next(new Error ("user not found")) ;
    }

socket.user = user ;
socket.userId = user._id.toString()
console.log(`Socket authenticated for user : ${user.fullName} (${user._id})`) ;
next() ;
}
    catch(error){
        console.log("Error in socket authentication:",error.message) ;
        next(new Error("unauthorized - authentication failed") ) ;
    }
};
