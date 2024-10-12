import React, { useState } from 'react'
import { Input } from './ui/input'
import { IconCheck, IconLineDashed, IconTrash, IconX } from '@tabler/icons-react'
import { useCreateTaskMutation, useDeleteTaskMutation, useGetTaskByIdQuery, useUpdateTaskMutation } from '@/services/task'
import { useParams } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { TaskStatus } from '@/interface/enum'

const TaskSection = () => {
    const { id } = useParams()
    const { data } = useGetTaskByIdQuery(String(id))
    const [createTaskInput, setCreateTaskInput] = useState('')
    const [createTask] = useCreateTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const [deleteTask] = useDeleteTaskMutation()

    const handleCreateTask = () => {
        if (createTaskInput) {
            createTask({ name: createTaskInput, projectId: Number(id) }).unwrap()
            setCreateTaskInput('')
        }
    }

    const handleUpdateTask = (id: string, status: TaskStatus) => {
        updateTask({ id, status }).unwrap()
    }

    const handleDeleteTask = (id: number) => {
        deleteTask(String(id)).unwrap()
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
            <div className='flex flex-col gap-2 overflow-y-auto h-[500px]'>
                {
                    data?.map((task, i) => (
                        <div key={i} className='flex justify-between items-center hover:bg-gray-100 px-2 py-1 cursor-pointer'>
                            <div className='flex items-center gap-2'>
                                <IconLineDashed className='w-5 h-5' />
                                <div className='text-sm'>{task?.name}</div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Select value={task?.status} onValueChange={(status) => handleUpdateTask(String(task?.id), status as TaskStatus)}>
                                    <SelectTrigger className="text-xs">
                                        <SelectValue defaultValue={TaskStatus.PENDING}>{task?.status}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={TaskStatus.PENDING}>Pendiente</SelectItem>
                                        <SelectItem value={TaskStatus.IN_PROGRESS}>En progreso</SelectItem>
                                        <SelectItem value={TaskStatus.COMPLETED}>Finalizado</SelectItem>
                                    </SelectContent>
                                </Select>
                                <IconTrash className='w-4 h-4 cursor-pointer' onClick={() => handleDeleteTask(task?.id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskSection