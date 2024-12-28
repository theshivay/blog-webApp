import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";

const router = express.Router();

// router for the user registration
router.post("/user/register", AuthController.userRegistration);
// routes for the user login
router.post("/user/login", AuthController.userLogin);

// Protected routes

router.get("/get/allblogs", BlogController.getAllBlogs);
router.post("/add/blog", BlogController.addNewBlog);
router.get("/get/blog/:id", BlogController.getSingleBlog);

export default router;


