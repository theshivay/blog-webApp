import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <main className='my-5'>
                <div className=' container border border-black rounded shadow-lg'>
                    <section className=' text-center'>
                        <h2 className=' text-light mb-5 my-3 pt-3'>
                            <strong>Latest posts</strong>
                        </h2>
                        <div className='row'>
                            <div className=' col-lg-4 col-md-10 mb-4'>
                                <div className='card border-3 border-black'>
                                    <div className='bg-image hover-overlay ripple' data-mdb-ripple-color="light">
                                        <img src={`https://www.shutterstock.com/shutterstock/photos/2134647139/display_1500/stock-vector-demo-demonstration-of-a-product-or-technique-text-concept-message-bubble-2134647139.jpg`} alt='img' className='img-fluid' />
                                        <a href=" ">
                                            <div className='mask' style={{
                                                backgroundColor : "rgba(251,251,251,0.15)"
                                            }}>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='card-body bg-light bg-gradient'>
                                            <h5 className='card-title'>Demo</h5>
                                            <p className='card-text'>Demo content</p>
                                            <Link to={"/blog/1"} className='btn btn-primary'>
                                                Read More
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className='bg-dark text-lg-start bottom-0'>
                <div className='text-center p-3 text-white' style={{backgroundColor : "rgba(0,0,0,0.2"}} >
                    @ 2024 Copyright :
                    <a className='text-white mx-2' href="https://github.com/theshivay" alt="github.com/theshivay">Shivam Mishra</a>
                </div>
            </footer>
        </>
    )
}

export default Home