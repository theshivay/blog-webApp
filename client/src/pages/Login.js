import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    // structure to store the input value from the form
    const [input, setInput] = useState({
        email : "",
        password : ""
    })

    // submit function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            // post the input data to the backend side
            const res = await axios.post("http://localhost:5050/api/v1/user/login",input)
            alert(res.data.message);
            // set the token to the localstorage
            localStorage.setItem("token",res.data.token);
            // set the username to the localstorage
            localStorage.setItem("username",res.data.name);
            // navigate to the home page
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    }
  return (
    <div className=' container border border-black my-4 rounded text-white p-3 shadow-lg w-25'>
        <h2 className='text-center fw-bold my-3' > <span className='shadow-lg'>Login your Account</span></h2>
        <div className='col-md-12 my-3 d-flex align-items-center justify-content-center' >
            <div className='row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Email
                        </label>
                        <input
                            type='text'
                            name='email'
                            value={input.email}
                            onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                            className='form-control border-3 border-black'
                            id='formGroupExampleInput'
                            placeholder='Enter Your Email'
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
                            onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                            className='form-control border-3 border-black'
                            id='formGroupExampleInput'
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='mb-3 text-center'>
                        <button type='submit' className='btn btn-primary btn-block fw-bold'>
                            Log-In
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default Login