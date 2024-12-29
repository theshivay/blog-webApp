import React from 'react'

function Register() {
  return (
    <div>
        <form>
            <h1>Register</h1>
            <input placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register