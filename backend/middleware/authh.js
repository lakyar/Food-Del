import jwt from "jsonwebtoken"

const authhMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if(!token) {
        return res.json({success:false,message:"Not authorized, Login agian!"})
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = token_decode.id;
        next();
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Errorwre"})
    }

}

export default authhMiddleware;