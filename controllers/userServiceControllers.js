import React from 'react'
import AllServicesModel from '../models/AllServicesModel.js';

export const getServiceControllers=async (req, res)=>{
    try {
        const serviceName=req.query.service;
        const pin=req.query.pin;
        const doc=await AllServicesModel.find({
            slugserviceName:serviceName}).populate({path:"providedBy",  match: { pin },});
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
