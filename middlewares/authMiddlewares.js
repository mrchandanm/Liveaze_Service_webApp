import JWT from 'jsonwebtoken'
import AdminUserModel from '../models/AdminUserModel.js';

export const requireSignIn=async (req,res,next)=>{
  try {
    const decod=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
    req.user=decod;
    next();
  } catch (error) {
    console.log(error)
  }
}

//admin access
export const isAdmin=async (req,res,next)=>{
    try {
      const user=await AdminUserModel.findById(req.user._id)
      if(user.role!=1){
        return res.status(401).send({
            success:false,
            message:"unauthorize access"
        })
      }
      else{
      next();
      }
    } catch (error) {
        res.status(401).send({
            success:false,
            error,
            message:"error in admin middleware"
        })
      console.log(error)
    }
  }