import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    // structure of storing the data from the form
    const [input, setInput] = useState({
        username : "",
        email : "",
        password : ""
    });

    // submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // send the form data to the backend side
            const res = await axios.post("http://localhost:5050/api/v1/user/register",input);
            alert(res.data.message);
            // navigate to the log-in page
            navigate("/login");
        } catch (error) {
            alert(error.response.data.message);
        }
    }

  return (
    <div className=' container border border-black my-4 rounded text-white p-3 shadow-lg w-25'>
        <h2 className='text-center fw-bold my-3' > <span className='shadow-lg'>Sign Up Here</span></h2>
        <div className='col-md-12 my-3 d-flex align-items-center justify-content-center' >
            <div className='row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='username'
                            value={input.username}
                            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value })}
                            className='form-control border-3 border-black'
                            id='formGroupExampleInput'
                            placeholder='Enter Name'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Email
                        </label>
                        <input
                            type='text'
                            name='email'
                            value={input.email}
                            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value })}
                            className='form-control border-3 border-black'
                            placeholder='Enter your Email'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={input.password}
                            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value })}
                            className='form-control border-3 border-black'
                            id='formGroupExampleInput'
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='mb-3 text-center'>
                        <button type='submit' className='btn btn-primary btn-block fw-bold'>
                            Sign-Up
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default Register