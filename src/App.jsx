import React, { useContext, useEffect, useState } from 'react'
import Login from './_components/Auth/Login'
import EmployeeDasboard from './_components/Dashboard/EmployeeDasboard'
import AdminDashboard from './_components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthCon } from './context/AuthContext'

const App = () => {

  const conData = useContext(AuthCon)
  const [loggedData, setLoggedData] = useState(null)


  const [user, setUser] = useState(null)

  function handleLogin(email, password) {

    let foundUser = null

    if (email == 'admin@abc.com' && password == '123') {
      setUser('admin')
    }

    else if (conData) {
      foundUser = conData && conData.local.find((e) => email == e.email && e.password == password)

    } if (foundUser) {
      setUser('employee')
      setLoggedData(foundUser)
    }

    else {
      alert('Invalid Credentials')
    }

    


  }


  useEffect(() => {
    setLocalStorage()

  })

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDasboard loginData={loggedData} /> : ''}

    </div>
  )
}

export default App