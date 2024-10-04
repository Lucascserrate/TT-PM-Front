import React, { useState } from 'react'
import { Input } from './ui/input'
import { IconAlignLeft, IconCheck, IconLine, IconLineDashed, IconX } from '@tabler/icons-react'
import { useCreateTaskMutation, useGetTaskByIdQuery } from '@/services/task'
import { useParams } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const TaskSection = () => {
    const { id } = useParams()
    const { data } = useGetTaskByIdQuery(String(id))
    const [createTaskInput, setCreateTaskInput] = useState('')
    // const [status, setStatus] = useState(data?.status)
    const [createTask] = useCreateTaskMutation()

    const handleCreateTask = () => {
        if (createTaskInput) {
            createTask({ name: createTaskInput, projectId: Number(id) }).unwrap()
            setCreateTaskInput('')
        }
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold'>Tareas</div>

            <div className='flex items-center gap-2 pb-4'>
                <Input value={createTaskInput} onChange={(e) => setCreateTaskInput(e.target.value)} placeholder='Task name' />
                <div className='cursor-pointer p-0.5 hover:bg-slate-100 rounded-sm' onClick={handleCreateTask}>
                    <IconCheck className='w-5 h-5' />
                </div>
                <div className='cursor-pointer p-0.5 hover:bg-slate-100 rounded-sm' onClick={() => setCreateTaskInput('')}>
                    <IconX className='w-5 h-5' />
                </div>
            </div>
            {
                data?.map((task, i) => (
                    <div key={i} className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <IconLineDashed className='w-5 h-5' />
                            <div>{task?.name}</div>
                        </div>

                    </div>
                )
                )
            }
        </div>
    )
}

export default TaskSection