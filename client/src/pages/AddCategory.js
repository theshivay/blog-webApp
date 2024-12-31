import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddCategory() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        title : "",
    });
    const handleCategory = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5050/api/v1/add/category",input,{
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`,
                }
            });
            alert(res.data.message);
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    }
  return (
    <div className=' container border border-black my-4 rounded text-white p-3 shadow-lg w-50'>
        <h2 className='text-center fw-bold my-3' > <span className='shadow-lg'>Add New Category</span></h2>
        <div className='col-md-12 my-3 d-flex align-items-center justify-content-center' >
            <div className='row'>
                <form onSubmit={handleCategory}>
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
                            placeholder='Enter Title'
                        />
                    </div>
                    <div className='mb-3 text-center'>
                        <button type='submit' className='btn btn-primary btn-block fw-bold'>
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default AddCategory