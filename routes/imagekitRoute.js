import { Router } from "express";
import { imageKitAuth } from "../controller/index.js";


export const imageKitRouter = Router();

imageKitRouter.get('/auth',imageKitAuth);


