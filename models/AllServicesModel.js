import mongoose from "mongoose";

const allServicesSchema=new mongoose.Schema({
    serviceType:{
        type:String,
        required:true,
    },
    slugserviceType:{
        type:String,
        lowercase:true,
    },
    serviceName:{
        type:String,
        required:true,
    },
    slugserviceName:{
        type:String,
        lowercase:true,
    },
    providedBy:{ 
        type:mongoose.Schema.Types.ObjectId ,
        ref:"AdminUsers",
    },
    minimumCharge:{
        type:String,
        required:true
    },
    maximumCharge:{
        type:String,
        required:true
    },
    images:{
        type:[{
        url:String, 
        id:String
    }]},
    ratingandfeedback:[{
        ratingId:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"ratingsandfeedback",
        }
    }]
},{timestamps:true});

export default new mongoose.model("AllServices",allServicesSchema);

