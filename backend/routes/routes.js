import express from "express";
import {GetUser, createuser, UpdateUser, DeleteUser} from "../controller/UserController.js";

const routers = express.Router();

routers.post("/create",createuser);
routers.get("/get", GetUser);
routers.put("/update/:id", UpdateUser);
routers.delete("/delete/:id", DeleteUser)

export default routers;