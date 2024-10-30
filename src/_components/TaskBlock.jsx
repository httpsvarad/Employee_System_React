import React from 'react'

const TaskBlock = () => {
    return (
        <div className='flex justify-between mt-10'>
            <div className='bg-blue-300 rounded-lg w-[23%] p-5'>
                <h1 className='text-3xl font-bold'>5</h1>
                <h2 className='text-xl font-semibold'>New Task</h2>
            </div>
            <div className='bg-green-300 rounded-lg w-[23%] p-5'>
                <h1 className='text-3xl font-bold'>4</h1>
                <h2 className='text-xl font-semibold'>Completed</h2>
            </div>
            <div className='bg-amber-300 rounded-lg w-[23%] p-5'>
                <h1 className='text-3xl font-bold'>2</h1>
                <h2 className='text-xl font-semibold'>Pending</h2>
            </div>
            <div className='bg-red-300 rounded-lg w-[23%] p-5'>
                <h1 className='text-3xl font-bold'>3</h1>
                <h2 className='text-xl font-semibold'>Failed</h2>
            </div>
        </div>   
    )
}

export default TaskBlock