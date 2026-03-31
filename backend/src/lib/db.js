import mongoose from "mongoose" 
import  { ENV } from "./env.js" ;
export const connectDB = async () => {
try{
     const { MONGO_URI } = ENV ;
     if(!MONGO_URI) throw new Error("MONGO_URI IS NOT SET")   


   const conn =  await mongoose.connect(ENV.MONGO_URI)
    console.log("mongodb connected :" , conn.connection.host)

} catch(error) {
    console.error("error connection to mongodb",error)
    process.exit(1) ; 

}



}