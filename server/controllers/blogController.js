import blogModel from "../models/blogModel.js";
class BlogController{
    // get method
    static getAllBlogs = async (req, res) => {
        try {
            const fetchAllBlog = await blogModel.find({user: req.user._id});
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
                const addBlog = new blogModel({
                    title : title,
                    category : category,
                    description : description,
                    thumbnail : req.file.filename,
                    user : req.user._id,
                })

                const savedBlog = await addBlog.save();
                if(savedBlog){
                    return res.status(200).json({"message" : "Blog Added successfully"});
                }
            }else{
                res.status(400).json({"message" : "All Fileds are required......."})
            }
            
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    };

    // get method
    static getSingleBlog = async (req, res) => {
        const {id} =  req.params;
        try{
            if(id){
                const fetchBlogById = await blogModel.findById(id);
                return res.status(200).json(fetchBlogById);
            }else{
                return res.status(400).json({"message" : "Invalid URL......"})
            }
        }catch(error){
            res.status(400).json({"message" : error.message})
        }
    };
}

export default BlogController;