import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const checkIsUserAuthenticate = async (req, res, next) => {
    let token;
    // taken the info from header file
    const {authorization} = req.headers;
    // check it, valid info or not
    if( authorization && authorization.startsWith("Bearer")){
        try {
            // Create token
            token = authorization.split(" ")[1];
            // Verify token
            const {userID} = jwt.verify(token, "anlbaslbdvalbiwbsjhd");
            // get user from token
            req.user = await authModel.findById(userID).select("--password");
            next();
        } catch (error) {
            return res.status(401).json({"message" : "Unauthorize User......"})
        }

    }else{
        return res.status(401).json({"message" : "unAuthorize User......"})
    }
}


export default checkIsUserAuthenticate;