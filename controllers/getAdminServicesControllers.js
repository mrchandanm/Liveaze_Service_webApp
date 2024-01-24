import AllServicesModel from "../models/AllServicesModel.js";

export const getAdminServicesControllers= async(req,res)=>{
    try {
    
    const userId=req.query.userId;
// serviceType=req.query.serviceType;

const doc=await AllServicesModel.find({
    providedBy:userId});
return res.status(200).send({
    success:true,
    doc,
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
