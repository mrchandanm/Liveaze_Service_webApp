import mongoose from "mongoose";
import AdminUserModel from "../models/AdminUserModel.js";
import AllServicesModel from "../models/AllServicesModel.js";
import slugify from "slugify";
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'dmrjh8ijs', 
    api_key: '543756782259942', 
    api_secret: 'QZyCfOKt_sPNJn6hkkoXGD6FroQ' 
  });

export const ServicesControllers=async(req,res)=>{
    try {
       
    const {serviceType,serviceName,providedBy,minimumCharge,maximumCharge,images}=req.body;

    // const {images}=req.files;
    // const images=req.file.filename;
    if(!minimumCharge) res.send({message:"Minimum Charge is required"});
    if(!maximumCharge) res.send({message:"maximum Charge is required"});
    if(!serviceType) res.send({message:"serviceType is required"});
    if(!serviceName) res.send({message:"serviceName is required"});

   

 const exist=await AllServicesModel.findOne({providedBy,serviceName,serviceType});
 if(exist) {
     return res.send({
     success:false,
     message:"already added",
 })
 }
    
    const service= await new AllServicesModel( {serviceType,slugserviceType:slugify(serviceType),serviceName,slugserviceName:slugify(serviceName),providedBy,minimumCharge,maximumCharge,images}).save();

const doc=await AdminUserModel.findById(providedBy);
doc.servicesProviding.push(service._id);
await doc.save();

    res.status(200).send({
        success:true,
        message:"service added succesfully",
        service
    })


    } catch (error) {
        console.log(error);
            res.status(400).send({
                success:false,
                message:"something went wrong",
                error
            })
    }

}

export const coludinaryUploadImage=async(req,res)=>{
    try {
         cloudinary.uploader.upload(req.files.file.path, 
  function(error, result) {console.log(result);
    res.send({
        success:true,
        result

    })
 });
   
    console.log(req.files);
} catch (error) {
      console.log(error)  
}
}