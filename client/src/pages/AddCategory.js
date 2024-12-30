import React from 'react'

function AddCategory() {
  return (
    <div className=' container border border-black my-4 rounded text-white p-3 shadow-lg w-50'>
        <h2 className='text-center fw-bold my-3' > <span className='shadow-lg'>Add New Category</span></h2>
        <div className='col-md-12 my-3 d-flex align-items-center justify-content-center' >
            <div className='row'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                            Title
                        </label>
                        <input
                            type='text'
                            name='title'
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