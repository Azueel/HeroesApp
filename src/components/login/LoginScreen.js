import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  //redirije 
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/marvel',{
      //evita que vuelva al login al retroceder
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
          <h1>Login</h1>
          <hr/>

          <button
            className='btn btn-primary'
            onClick={handleLogin}
          >
            Login
          </button>
    </div>
  )
}
