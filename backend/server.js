const express = require("express")
const todoRoute = require("./router/todoRouter")
const dotenv = require("dotenv");
const userRoute = require("./router/userRouter");
const connectDB = require("./config/db");


dotenv.config();
const app = express();
app.use(cors());
connectDB();

app.use(express.json())
app.use("/api/todo",todoRoute);
app.use("/api/user",userRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`);
})