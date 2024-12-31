import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddBlog() {
    // structure of the blog
    const [input, setInput] = useState({
        title : "",
        description : "",
        category : "",
    })
    // storing the file data
    const [file, setFile] = useState([]);
    // storing the categoring for the select option
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate();

    // Get all the category from the database to show in option in form
    useEffect(()=>{
        const fetchAllCategory = async () =>{
            const res = await axios.get("http://localhost:5050/api/v1/get/categories",{
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            });
            // store all the categories
            setCategories(res.data);
        }
        fetchAllCategory();
    },[]);
    
    // Creating a form data with title, category, description, and file
    const formData = new FormData();
    formData.append("title", input.title)
    formData.append("category", input.category)
    formData.append("description", input.description)
    formData.append("thumbnail", file)
    
    // submit functionality
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            // send the data to the backend side from the form
            const res = await axios.post("http://localhost:5050/api/v1/add/blog",formData,{
                // check the authorize user or not
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
            alert(res.data.message);
            // navigate to the home page
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <>
            <div className='container border border-black my-4 rounded text-white p-3 shadow-lg w-50'>
                <h2 className='text-center my-3'>Add a New Blog</h2>
                <div className='col-xl-12 my-3 d-flex items-center justify-content-center'>
                    <div className='row'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Title
                                </label>
                                <input
                                    type='text'
                                    name='title'
                                    value={input.title}
                                    onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                                    className='form-control border-3 border-black'
                                    id='formGroupExampleInput'
                                    placeholder='Blog Title'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Category
                                </label>
                                <select name="category" className='form-control border-3 border-black'
                                    onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}>
                                    <option className='text-black' disabled>Select Category</option>
                                    {/* check the condition for categories, created or not */}
                                    {categories && categories.map((item) =>{
                                        return <option value={item._id}>{item.title}</option>
                                    })}
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Description
                                </label>
                                <textarea
                                    name='description'
                                    rows={"5"}
                                    value={input.description}
                                    onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                                    className='form-control border-3 border-black'
                                    placeholder='Blog Description.....'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Thumbnail
                                </label>
                                <input
                                    type='file'
                                    name='thumnail'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className='form-control border-3 border-black'
                                    id='formGroupExampleInput'
                                    placeholder='Select Thumbnail'
                                />
                            </div>
                            <div className='mb-3 text-center'>
                                <button type='submit' className='btn btn-primary btn-block fw-bold'>
                                    Add Blog
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AddBlog