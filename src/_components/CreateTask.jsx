import React from 'react'

const CreateTask = () => {

    // const { loginCred } = props
    // const taskList = loginCred.loginData.tasks
    // console.log(props)

    return (
        <div className='flex gap-5 justify-center'>
            <div className='bg-black p-10 rounded-lg mt-10 w-[350px]'>
                <h2 className='text-2xl mb-3 text-white font-semibold'>Create Task</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Task Title"
                        class="input bg-slate-700 text-white  input-bordered input-warning w-full max-w-xs" />

                    <input
                        type="text"
                        placeholder="Assign To"
                        class="input bg-slate-700 mt-5 text-white  input-bordered input-warning w-full max-w-xs" />

                    <textarea class="textarea text-white bg-slate-700 mt-5 w-full textarea-warning" placeholder="Task Description"></textarea>

                    <input type="date" class="input input-warning  text-white mt-4 bg-slate-700 w-full" name="" id="" />

                    <select class="select select-warning mt-5  text-white bg-slate-700 w-full max-w-xs">
                        <option disabled selected>Priority</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                    <button class="btn w-full mt-5 btn-accent">Create</button>


                </form>
            </div>

            <div id='tasklist' className='bg-black h-screen overflow-y-scroll p-10 rounded-lg mt-10 w-full'>
                <h2 className='text-2xl mb-3 text-white font-semibold'>Assigned Task</h2>
                <div>
                    <div className='bg-slate-300 my-4 w-full h-auto rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className='bg-red-500 text-sm text-white p-1 rounded-md w-14 text-center font-semibold'>High</h3>
                            <h3 className='font-semibold text-black'>Sarthak</h3>
                        </div>
                        <h2 className=' mt-5 text-md font-bold'>Make a PPT on Carbon Emissions 2025</h2>
                        <h2 className=' mt-2 text-sm font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur iure consequuntur ab quasi laboriosam, odit nemo perspiciatis maxime. Itaque.</h2>
                    </div>
                    <div className='bg-slate-300 my-4 w-full h-auto rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className='bg-red-500 text-sm text-white p-1 rounded-md w-14 text-center font-semibold'>High</h3>
                            <h3 className='font-semibold text-black'>Sarthak</h3>
                        </div>
                        <h2 className=' mt-5 text-md font-bold'>Make a PPT on Carbon Emissions 2025</h2>
                        <h2 className=' mt-2 text-sm font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur iure consequuntur ab quasi laboriosam, odit nemo perspiciatis maxime. Itaque.</h2>
                    </div>
                    <div className='bg-slate-300 my-4 w-full h-auto rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className='bg-red-500 text-sm text-white p-1 rounded-md w-14 text-center font-semibold'>High</h3>
                            <h3 className='font-semibold text-black'>Sarthak</h3>
                        </div>
                        <h2 className=' mt-5 text-md font-bold'>Make a PPT on Carbon Emissions 2025</h2>
                        <h2 className=' mt-2 text-sm font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur iure consequuntur ab quasi laboriosam, odit nemo perspiciatis maxime. Itaque.</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateTask