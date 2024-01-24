import AdminUserModel from "../models/AdminUserModel.js";
import OrdersModel from "../models/OrdersModel.js";
import userModels from "../models/userModels.js";

export const bookServiceControllers=async(req, res)=>{
    try {
        const {serviceId,orderedBy,serviceProviderId,name,phone,pin,state,city,address,dateandTime}=req.body;
        if(!name) return res.send({message:"name is required"});
        if(!phone) return res.send({message:"phone no. is required"});
        if(!state) return res.send({message:"state is required"});
        if(!city) return res.send({message:"city is required"});
        if(!address) return res.send({message:"address is required"});
        if(!dateandTime) return res.send({message:"date is required"});
        if(!pin) return res.send({message:"pin is required"});

        const order= await new OrdersModel({serviceId,orderedBy,serviceProviderId,name,phone,pin,state,city,address,dateandTime}).save();

        const admindoc=await AdminUserModel.findById(serviceProviderId);
        admindoc.orders.push(order._id);
        await admindoc.save();

        const userdoc=await userModels.findById(orderedBy);
        userdoc.orders.push(order._id);
        await userdoc.save();

        res.status(200).send({
            success:true,
            message:"service Booked Succesfully",
            order
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