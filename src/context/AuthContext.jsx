import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthCon = createContext()

const AuthContext = ({ children }) => {

  const [userData, setUserData] = useState([])

  useEffect(() => {

    const data = getLocalStorage()
    setUserData(data)



  },[])




  return (

    <div>
      <AuthCon.Provider value={userData}>
        {children}
      </AuthCon.Provider>
    </div>

  )
}

export default AuthContext