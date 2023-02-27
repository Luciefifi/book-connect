import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv"
import { testSequelizeConnection } from "./config/database.js";


dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT||5000
app.listen(port , () => {
    console.log(`The app listen on port ${port}`)
})
testSequelizeConnection();