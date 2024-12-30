import React from 'react'

function Login() {
  return (
    <div className=' container border border-black my-4 rounded text-white p-3 shadow-lg w-25'>
        <h2 className='text-center fw-bold my-3' > <span className='shadow-lg'>Login your Account</span></h2>
        <div className='col-md-12 my-3 d-flex align-items-center justify-content-center' >
            <div className='row'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            className='form-control border-3 border-black'
                            id='formGroupExampleInput'
                            placeholder='Enter Name'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
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