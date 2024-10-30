import React from 'react'
import Header from '../Header'
import CreateTask from '../CreateTask'

const AdminDashboard = () => {
    return (
        <div className='p-7  bg-[#1C1C1C] '>
            <Header />
            <CreateTask />
        </div>
    )
}

export default AdminDashboard