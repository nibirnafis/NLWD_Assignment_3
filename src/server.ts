import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import app from "./app"

const port = 3000
const mongoURI = process.env.MONGODB_URI as string

async function main(){
    try{
        await mongoose.connect(mongoURI);
        console.log("connected to MongoDB using Mongoose!!!")
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }
    catch(error){
        console.log(error, "connection error")
    }
}


main()