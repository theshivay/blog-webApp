import categoryModel from "../models/categoryModel.js";

class CategoryController{
    static getAllCategories = async (req, res) =>{
        try {
            const fetchAllCategory = await categoryModel.find({});
            return res.status(200).json(fetchAllCategory);
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    };
    static addNewCategory = async (req, res) =>{
        const {title} = req.body;
        try {
            if(title){
                const check = await categoryModel.findOne({title : title});
                if(check){
                    res.status(400).json({"message" : "Category already exist....." })
                }else{
                    const newCategory = new categoryModel({
                        title,
                    })
                    const savedCategory = await newCategory.save();
                    if(savedCategory){
                        res.status(200).json({"message" : "Category Added Successfully......."});
                    }
                }

            }else{
                res.status(400).json({"message" : "Enter the valid fields......."});
            }
            
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    };
}

export default CategoryController;