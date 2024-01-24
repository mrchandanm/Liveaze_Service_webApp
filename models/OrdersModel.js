import mongoose from "mongoose";

const ordersSchema=new mongoose.Schema({
    serviceId:{
        type:mongoose.Types.ObjectId,
        ref:"AllServices"
    },
    orderedBy:{
        type:mongoose.Types.ObjectId,
        ref:'Users',
    },
    serviceProviderId:{
        type:mongoose.Types.ObjectId,
        ref:'AdminUsers',
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required: true, 
    },
    pin:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        // required:true,
        default:"west Bengal"
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    dateandTime:{
        type:String
    },
    orderStatus:{
        type:String,
        default:"pending" // pending -->> accepted  -->> complected   or  rejected 
    },
    orderCompletedDate:{
        type:String,
    },
    ratingandfeedback:[{
        ratingId:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"ratingsandfeedback",
        }
    }]

})
export default new mongoose.model("AllOrders", ordersSchema)