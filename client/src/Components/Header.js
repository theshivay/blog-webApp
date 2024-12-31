import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    // get the token from the localstorage
    const token = localStorage.getItem("token");
    // get the user name from the local storage
    const username = localStorage.getItem("username");

    // log-out functionality
    const handleLogout =  () =>{
        // remove the token from the local storage
        localStorage.removeItem("token");
        // remove the username from the localstorage
        localStorage.removeItem("username");
        alert("Log-Out Successfully......");
        // navigate to log-in page
        navigate("/login");
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Blog | Hub</Navbar.Brand>
          <Nav className="me-auto gap-3">
            <Link className='nav-link text-white' to={"/"}>
                Home
            </Link>
            <Link className='nav-link text-white' to={"/add-blog"}>
                Add Blog
            </Link>
            <Link className='nav-link text-white' to={"/add-category"}>
                Add Category
            </Link>
          </Nav>
          <div className='div-inline d-flex gap-3 mx-auto my-2 my-lg-0' gap={2}>
            {/* Condition to when the log-in and sign-up button will be shown or username shown */}
            {token && token !== null ? 
            <>
            <Button variant="light">
                Welcome : <strong>{username}{" "}</strong>
            </Button>
            <Button onClick={handleLogout} variant="light">
                Log-Out
            </Button>
            </> : <>
            <Link to={"/login"}>
                <Button variant="light">Log-In</Button>
            </Link>
            <Link to={"/register"}>
                <Button variant="light">Sign-Up</Button>
            </Link>
            </>
}
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header