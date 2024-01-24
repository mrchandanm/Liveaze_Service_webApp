import { comparePassword, hashpasssword } from "../helpers/authHelper.js";
import AdminUserModel from "../models/AdminUserModel.js";
import JWT from 'jsonwebtoken';

const adminRegisterController=async (req, res)=>{
try {
    // userModels.save(req.body);
    const {name,email,password,phone,address1,address2,profession,answer,pin,state,city}=req.body;
    if(!name) return res.send({message:"name is required"});
    if(!email) return res.send({message:"email is required"});
    if(!password) return res.send({message:"password is required"});
    if(!address1) return res.send({message:"address is required"});
    if(!answer) return res.send({message:"answer is required"});
    if(!pin) return res.send({message:"pin is required"});
    if(!city) return res.send({message:"city is required"});
    if(!state || state==='Choose State') return res.send({message:"state is required"});
    if(!profession || profession==="Select Profession") return res.send({message:"select profession"});

    //checking user
    const existingUser= await AdminUserModel.findOne({email});
    //existing user
    if(existingUser){
        return res.status(401).send({
            success:false,
            message:"email already registerd as admin"});
            
    }

    //register user
    const hashedpasssword= await hashpasssword(password);
    const user=await new AdminUserModel({name,email,password:hashedpasssword,phone,address1,address2,profession,answer,pin,state,city}).save();
    res.status(200).send({
        success:true,
        message:"user registered succesfully",
        user
    })
    
} catch (error) {
    console.log(error);
    res.status(400).send({
        success:false,
        message:"FAILED TO REGISTER",
        error
    })
}
}

export const AdminLoginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        //validation
        if(!email || !password){
            res.status(400).send({
                success:false,
                message:"Invalid User Credentials"
            });
        }

        //check
        const user= await AdminUserModel.findOne({email});
        if(!user){
            return res.status(400).send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }

        //token
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",});
        res.status(200).send({
            success:true,
            message:"Login succesfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address1:user.address1,
                address2:user.address2,
                city:user.city,
                state:user.state,
                pin:user.pin,
                role:user.role,
                profession:user.profession,
                id:user._id,
            }, 
            token
        })

        
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:"FAILED TO LOGIN",
            error
        })
    }
}

export const AdminforgotPasswordController=async (req,res)=>{
    try {
        const [email,answer,newPassword]=req.body;

        if(!email) return res.send({message:"email is required"});
        if(!answer) return res.send({message:"answer is required"});
        if(!newPassword) return res.send({message:"newPasword is required"});
        
        //check
        const user= await userModels.findOne({email,answer});
        //validation
        if(!user) {
            return res.status(401).send({
                success:false,
                message:"wrong email or password"
            })
        }

        const hashed=await hashpasssword(newPassword);
        await userModels.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"password changed succesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            message:"something went wrong",
            error
        })
    }
}

export const testController=async (req,res)=>{
    res.send("protected Route")
}


export default adminRegisterController;