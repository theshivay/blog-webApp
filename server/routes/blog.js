import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();

// router for the user registration
router.post("/user/register", AuthController.userRegistration);
// routes for the user login
router.post("/user/login", AuthController.userLogin);


export default router;


