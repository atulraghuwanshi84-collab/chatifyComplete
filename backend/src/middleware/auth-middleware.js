import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { ENV} from "../lib/env.js" ;




export const protectRoute = async(req,res,next) => {

    try{
        const token = req.cookies.jwt
        if(!token) 
            return res.status(401).json({
        message : "unauthorized - no token provided"})
        const decoded = jwt.verify(token,ENV.JWT_SECRET)
        if(!decoded) 
            return res.status(401).json({
        message: "unauthorized - no token provided"})
        const user = await User.findById(decoded.userId)
        if(!user) 
            return res.status(404).json({
        message: "user not found "})
            req.user = user
            
            next()
    }
    catch(error){

        console.log("error in protectROute middleware",error);
        res.status(500).json({message: "Internal server error"}) ;
        


    }



}
