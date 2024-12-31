import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// check the authorization from the frontend side
function Protected() {
    const auth = localStorage.getItem("token");
    return auth && auth !== null ? <Outlet/> : <Navigate to="/login" />
}

export default Protected;