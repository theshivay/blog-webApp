import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    // contain all blogs
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        // fetch all the blogs from the database
        const fetchAllBlogs = async () => {
            const res = await axios.get("http://localhost:5050/api/v1/get/allblogs", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
            // add the blogs to Blogs's variable
            setBlogs(res.data);
        }
        fetchAllBlogs();
    }, [])
    return (
        <>
            <main className='my-5' style={{ minHeight: "74vh" }}>
                <div className=' container border border-black rounded shadow-lg'>
                    <section className=' text-center'>
                        <h2 className=' text-light mb-5 my-3 pt-3'>
                            <strong>Latest posts</strong>
                        </h2>
                        <div className='row'>
                            {/* conditon when to showing the blogs */}
                            {blogs && blogs.length > 0 ? (
                                blogs.map((item) => {
                                    return (
                                        <div className=' col-lg-4 col-md-10 mb-4'>
                                            <div className='card border-3 border-black'>
                                                <div className='bg-image hover-overlay ripple' data-mdb-ripple-color="light">
                                                    <img src={`http://localhost:5050/${item.thumbnail}`} alt='img' className='img-fluid' />
                                                    <a href=" ">
                                                        <div className='mask' style={{
                                                            backgroundColor: "rgba(251,251,251,0.15)"
                                                        }}>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='card-body bg-light bg-gradient'>
                                                    <h5 className='card-title'>{item.title}</h5>
                                                    <p className='card-text'>{item.description}</p>
                                                    <Link to={`/blog/${item._id}`} className='btn btn-primary'>
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <h3 className=' text-light'>Loading.........</h3>}
                        </div>
                    </section>
                </div>
            </main>
            <footer className='bg-dark text-lg-start bottom-0'>
                <div className='text-center p-3 text-white' style={{ backgroundColor: "rgba(0,0,0,0.2" }} >
                &copy; 2024 Copyright :
                    <a className='text-white mx-2' href="https://github.com/theshivay" alt="github.com/theshivay">Shivam Mishra</a>
                </div>
            </footer>
        </>
    )
}

export default Home