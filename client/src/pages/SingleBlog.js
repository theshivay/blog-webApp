import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function SingleBlog() {
    // store the id 
    const {id} = useParams();
    // store the single blog
    const [blog,setBlog] = useState({});

    useEffect(()=>{
        // fetch the single blog from the database
        const fetchSingleBlog = async() =>{
            const res = await axios.get(`http://localhost:5050/api/v1/get/blog/${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })
            // store the single blog into it
            setBlog(res.data);
        };
        fetchSingleBlog();
    },[id])

    const navigate = useNavigate();
    return (
        <>
            <div className='container shadow-lg my-3 '>
                <div className=' col-md-12 d-flex align-items-center justify-content-center bg-light'>
                    <div className='row'>
                        <h5 className='card-title my-3'>{blog.title}</h5>
                        <p className='card-text my-3'>Published Date: </p>
                        <img 
                            src={`http://localhost:5050/${blog.thumbnail}`}
                            alt='img'
                            className='img img-responsive img-rounded my-3'
                        />
                        <p className='my-3'>{blog.description}</p>
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