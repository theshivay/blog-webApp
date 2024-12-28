import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";


// Multer setup
import multer from "multer";
// set the destination and name of the file
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, `public/upload/`);
    },
    filename : (req, file, cb) =>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
})
// Set into the json
const upload = multer({storage : storage});

const router = express.Router();

// router for the user registration
router.post("/user/register", AuthController.userRegistration);
// routes for the user login
router.post("/user/login", AuthController.userLogin);

// Protected routes
// for blogs
router.get("/get/allblogs", BlogController.getAllBlogs);
router.post("/add/blog",upload.single("thumbnail") ,BlogController.addNewBlog);
router.get("/get/blog/:id", BlogController.getSingleBlog);


// for category
router.get("/get/categories", CategoryController.getAllCategories);
router.post("/add/category", CategoryController.addNewCategory);



export default router;


