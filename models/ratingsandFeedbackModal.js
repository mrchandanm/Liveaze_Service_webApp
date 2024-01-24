import mongoose from "mongoose";

const ratingandfeedbackSchema=new mongoose.Schema({
    serviceId:{
        type:mongoose.Types.ObjectId,
        ref:"AllServices"
    },

    userId:{
        type:mongoose.Types.ObjectId,
        ref:'Users',
    },
    rating:{
        type:Number,
    },
    feedback:{
        type:String
    }
})
export default new mongoose.model("ratingandfeedback",ratingandfeedbackSchema);