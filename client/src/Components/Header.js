import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header() {
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
            <Link to={"/login"}>
                <Button variant="light">Log-In</Button>
            </Link>
            <Link to={"/register"}>
                <Button variant="light">Sign-Up</Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header