import React from 'react'

const Header = (props) => {

  function logout(){
    window.location.reload()
    }
  
  
  return (
    <div className='flex justify-between'>
        <h1 className='text-4xl text-white font-semibold'>Hello {props.loginCred.loginData.name} 👋</h1>
        <button onClick={logout} class="btn text-white btn-error">Logout</button>
    </div>
  )
}

export default Header