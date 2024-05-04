import express from "express";
import dbCon from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";
import routers from "./routes/routes.js";

dotenv.config();
const app = express();
app.use(express.json()); 
app.use(cors());
dbCon();
app.use('/api', routers);
app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING AT PORT", process.env.PORT);
});
