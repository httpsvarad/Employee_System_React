import React from 'react';

export const TaskCard = (props) => {
    const { loginCred } = props;
    const cardData = loginCred.loginData.tasks
    return (
        <div id='tasklist' className='flex overflow-x-scroll gap-7 flex-nowrap mt-7'>
            {cardData.map((task, index) => {

                const bgColorClass = task.priority === 'high'
                    ? 'bg-red-500'
                    : task.priority === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500';

                return (
                    <div key={index} className='bg-slate-300 w-[300px] h-auto shrink-0 rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className={`text-sm text-white p-1 rounded-md w-16 text-center font-semibold ${bgColorClass}`}>
                                {task.priority}
                            </h3>
                            <h3 className='font-semibold text-black'>{task.taskDate}</h3>
                        </div>
                        <h2 className='mt-5 text-xl font-bold'>{task.taskTitle}</h2>
                        <h2 className='mt-2 text-sm font-semibold'>{task.taskDescription}</h2>
                    </div>
                );
            })}
        </div>
    );
};
