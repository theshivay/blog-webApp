import React from 'react'

function AddBlog() {
    return (
        <>
            <div className='container border border-black my-4 rounded text-white p-3 shadow-lg w-50'>
                <h2 className='text-center my-3'>Add a New Blog</h2>
                <div className='col-xl-12 my-3 d-flex items-center justify-content-center'>
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
                                    placeholder='Blog Title'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Category
                                </label>
                                <select name="category" className='form-control border-3 border-black'>
                                    <option className='text-black' disabled>Select Category</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="formGroupExampleInput" className='form-label fw-bold'>
                                    Description
                                </label>
                                <textarea
                                    name='description'
                                    rows={"5"}
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