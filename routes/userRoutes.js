import  express  from "express";
import { getServiceControllers } from "../controllers/userServiceControllers.js";
import { bookServiceControllers } from "../controllers/bookServiceControllers.js";


const router=express.Router();
router.get("/get-services",getServiceControllers);
router.post("/book-service",bookServiceControllers);

export default router;