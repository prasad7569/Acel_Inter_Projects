
import mongoose from 'mongoose';



export const DBconnection = async()=>{
        try {
            await mongoose.connect("mongodb+srv://nextjs:prasad@electronics.fbwrgmc.mongodb.net/?retryWrites=true&w=majority&appName=Electronics")
            console.log("MongoDB Connection Succesfful")
        } catch (error) {
            console.log(error)
        }
}

