import mongoose from "mongoose";
const dbCon = async () => {
    try {
       await mongoose.connect(process.env.DB_URL);
        console.log("database conncted successfully")
        
    } catch (error) {
        console.log("error in connecting", error)
    }
}

export default dbCon;