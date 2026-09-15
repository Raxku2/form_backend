import { Router } from "express";
import { formSubmitHandeler, getFormHandeler } from "../controller/index.js";


const formRouter = Router();

formRouter.post('/submit',formSubmitHandeler);


formRouter.get('/all',getFormHandeler);


export {
  formRouter
}
