import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleBlog() {

    const navigate = useNavigate();
    return (
        <>
            <div className='container shadow-lg my-3 '>
                <div className=' col-md-12 d-flex align-items-center justify-content-center bg-light'>
                    <div className='row'>
                        <h5 className='card-title my-3'>Demo</h5>
                        <p className='card-text my-3'>Published Date: </p>
                        <img 
                            src={`https://www.shutterstock.com/shutterstock/photos/2134647139/display_1500/stock-vector-demo-demonstration-of-a-product-or-technique-text-concept-message-bubble-2134647139.jpg`}
                            alt='img'
                            className='img img-responsive img-rounded my-3'
                        />
                        <p className='my-3'>Description</p>
                    </div>
                </div>
                <button onClick={()=> navigate("/")} className='btn btn-primary'>
                    Back To Home
                </button>
            </div>
        </>
    )
}

export default SingleBlog