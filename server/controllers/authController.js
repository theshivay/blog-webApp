import authModel from "../models/authModel.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();



class AuthController{
    // user registration function to from the user side
    static userRegistration = async (req,res) => {
        // to get data from the user
        const {username, email, password} = req.body;
        try {
            // check the req.body have all the parameter or not
            if(username && email && password){
                const isUser = await authModel.findOne({email : email});
                // check email is unique or not
                if(!isUser){
                    // password hashing
                    const genSalt = await bcryptjs.genSalt(10);
                    // change the password to hash code
                    const hashedPassword = await bcryptjs.hash(password,genSalt);

                    // create an object for the user
                    const newUser = authModel({
                        username,
                        email,
                        password : hashedPassword,
                    });

                    // save it to the database
                    const savedUser = await newUser.save();
                    if(savedUser){
                        res.status(200).json({"message" : "User registration Succussfully........"});
                    }else{
                        res.status(400).json({"message" : "Something went wrong......."})
                    }
                }else{
                    // send the error to the user
                    res.status(400).json({"message" : "Email Already existd......"});
                }

            }else{
                // send the error to the user
                res.status(400).json({"message" : "All fields are required......"});
            }
            
        } catch (error) {
            // send the error to the user
            res.status(400).json({"message" : error.message});
        }

    };

    // user login functionality to from the user side
    static userLogin = async (req, res) => {
        // to get the data from the user
        const {email, password} =  req.body;
        try {
            // to check email and password are present are not
            if(email && password){
                // store the email and password into this variable
                const isEmail = await authModel.findOne({email : email});
                // to check empty or not
                if(isEmail){
                    // credential verification
                    if(isEmail.email === email && await bcryptjs.compare(password,isEmail.password)){
                        
                        // Generate token// secret key
                        const secret = "anlbaslbdvalbiwbsjhd";
                        const token = jwt.sign({userID : isEmail._id}, secret, {expiresIn : "2d"})
                        // send to the user
                        res.status(200).json({"message" : "LogIn Successfully.....", token, name : isEmail.username})
                    }else{
                        // send the error to the user
                        res.status(400).json({"message" : "Wrong credential......"});
                    }
                }else{
                    // send the error to the user
                    res.status(400).json({"message" : "Email is not register........"});
                }

            }else{
                // send the error to the user
                res.status(400).json({"message" : "All fields are required......"});
            }
            
        } catch (error) {
            // send the error to the user
            res.status(400).json({"message" : error.message});
        }
    };
}

export default AuthController;