import blogModel from "../models/blogModel.js";
class BlogController{
    // get method
    static getAllBlogs = async (req, res) => {
        try {
            const fetchAllBlog = await blogModel.find({});
            return res.status(200).json(fetchAllBlog);
            
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    };

    // Post method
    static addNewBlog = async (req, res) => {
        const {title, category, description} = req.body;
        try {
            if(title && category && description){

            }else{
                res.status(400).json({"message" : "All Fileds are required......."})
            }
            
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    };

    // get method
    static getSingleBlog = async (req, res) => {
        res.send("Get single Blog")
    };
}

export default BlogController;