import express from "express";
import { ServicesControllers, coludinaryUploadImage } from "../controllers/ServicesControllers.js";
import { getAdminServicesControllers } from "../controllers/getAdminServicesControllers.js";
import ExpressFormidable from "express-formidable";

const router=express.Router();

router.post("/add-services",ServicesControllers);
router.get("/get-all-services",getAdminServicesControllers);
router.post("/upload-image",ExpressFormidable(),coludinaryUploadImage);

export default router;