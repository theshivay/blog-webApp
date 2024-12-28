class BlogController{
    static getAllBlogs = async (req, res) => {
        res.send("Get All Blogs");
    };
    static addNewBlog = async (req, res) => {
        res.send("Add Blog")
    };
    static getSingleBlog = async (req, res) => {
        res.send("Single Blog")
    };
}

export default BlogController;