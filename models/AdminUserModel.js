import mongoose from "mongoose";

export const adminUserSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required: true,
        unique:true
    },
    profession:{
        type:String,
        requird:true
    },
    pin:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:1
    },
    servicesProviding:[
        {
            serviceId:{
                type:mongoose.Types.ObjectId,
                ref:'AllServices',
            }
        }
    ],
    orders:
        [
            {
               
                orderId:{
                    type:mongoose.Types.ObjectId,
                    ref:'AllOrders',
                }
            }
        ],

    
},{timestamps:true});

// const UserModel= mongoose.model("users",userSchema);

export default mongoose.model("AdminUsers",adminUserSchema);