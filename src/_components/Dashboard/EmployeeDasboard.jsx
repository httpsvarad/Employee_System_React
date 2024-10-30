import React from 'react'
import Header from '../Header'
import TaskBlock from '../TaskBlock'
import { TaskCard } from '../TaskCard'

const EmployeeDasboard = (props) => {
  
  return (
    <div className='p-7 bg-[#1C1C1C] h-screen'>
        <Header loginCred={props}/>
        <TaskBlock/>
        <TaskCard loginCred={props}/>
    </div>
  )
}

export default EmployeeDasboard