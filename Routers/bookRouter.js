import express from "express"
import BookController from "../controllers/bookController.js";
const  bookRoute= express.Router()


bookRoute.get("/",BookController.getAllBooks); //Get all books


export default bookRoute