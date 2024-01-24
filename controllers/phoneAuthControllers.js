import twilio from 'twilio';

const client = twilio("ACa01ffd833b6f5b39cfdd1d883357e8d2", "46be051f8607edb7475c3f58342a8def");
let OTP;
export const phoneRegisterController=async (req,res)=>{
    const {phone}=req.body;
    
    let digits="0123456789";
     OTP="";
    for(let i=0; i<4; i++){
        OTP+=digits[Math.floor(Math.random()*10)];
    }

    client.messages
    .create({
        body: `your otp verificationn code for ${phone} is ${OTP}`,
        from: '+12407241140',
        to: `+91${phone}`
    })
    .then(()=>res.status(400).send({message:"message sent successfully"}));

}
export const verifySignup=async (req, res)=>{
    const{otp}=req.body;
    if(otp!=OTP){
        res.status(400).send({message:"wrong otp"});
        return;
    }
    res.status(200).send({message:"OTP verified"});
    

}