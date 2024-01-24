import express from "express";
import registerController, { forgotPasswordController, loginController, testController } from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import adminRegisterController, { AdminLoginController } from "../controllers/adminAuthControllers.js";
import { ServicesControllers} from "../controllers/ServicesControllers.js";
import multer from "multer";
import { phoneRegisterController, verifySignup } from "../controllers/phoneAuthControllers.js";
//router object
const router = express.Router();

//storage and file name setting 
const storage=multer.diskStorage({
    destination:'client/public/backend/images',
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})


const upload=multer({
    storage:storage,
})

//routing 
// Register || method POST
router.post("/register",registerController);
router.post("/admin-register",adminRegisterController);

//Register using phone no. and otp
router.post("/phone-register",phoneRegisterController);
router.post("/phone-register/verify",verifySignup);

//Login || method POST

router.post("/login",loginController);
router.post("/admin-login",AdminLoginController);


//fan repair service || POST
// router.post("/fan-repair",upload.single("images"),ServicesControllers)
// router.post("/add-services",ServicesControllers);

//forgot Password || method POST
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get("/test",requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})


export default router;