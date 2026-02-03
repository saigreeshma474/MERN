const express = require("express");
const { getUser, createUser, editUser, deleteUser, getUserById } = require("../controller/userController");

const userRoute = express.Router();

userRoute.get("/",getUser)
userRoute.get("/:id",getUserById);
userRoute.post("/create",createUser);
userRoute.put("/update/:id",editUser);
userRoute.delete("/delete/:id",deleteUser);

module.exports = userRoute;