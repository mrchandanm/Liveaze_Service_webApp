import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    gender:{
        type:String,
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
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
    orders:
    [
        {
            orderId:{
                type:mongoose.Types.ObjectId,
                ref:'AllOrders',
            }
        }
    ],
    wishlist:[{
        serviceId:{
            type:mongoose.Types.ObjectId,
            ref:'AllServices',
        }
    }]
},{timestamps:true});

// const UserModel= mongoose.model("users",userSchema);

export default mongoose.model("Users",userSchema);