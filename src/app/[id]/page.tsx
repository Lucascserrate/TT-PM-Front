'use client'
import { Textarea } from '@/components/ui/textarea'
import { IProject } from '@/interface/interface'
import { IconEdit } from '@tabler/icons-react'
import axios from 'axios'
import { set } from 'date-fns'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProjectDetailPage = () => {
    const { id } = useParams()
    const [project, setProject] = useState<IProject>()
    const [textareaDisabled, setTextareaDisabled] = useState<boolean>(true)
    const [description, setDescription] = useState<string>('')

    // Setea los datos del proyecto
    useEffect(() => {
        axios.get(`http://localhost:3001/projects/${id}`).then((res) => {
            setProject(res.data)
            setDescription(res.data.description)
        })
    }, [id])

    const handleDescriptionSave = async () => {
        try {
            await axios.patch(`http://localhost:3001/projects/${id}`, {
                description: description,
            })

            setProject((prevProject: IProject | undefined) => {
                if (prevProject) {
                    return {
                        ...prevProject,
                        description: description
                    }
                }
                return prevProject
            })
            setTextareaDisabled(true)
        } catch (error) {
            console.error("Error al actualizar la descripción:", error)
        }
    }

    return (
        <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 py-10'>
            <h1 className='text-4xl font-semibold'>{project?.name}</h1>
            <div className='flex gap-2'>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} onBlur={handleDescriptionSave} disabled={textareaDisabled} className={`${textareaDisabled && 'border-none shadow-none'} resize-none`} />
                <IconEdit className='cursor-pointer' onClick={() => setTextareaDisabled(!textareaDisabled)} />
            </div>

        </div>
    )
}

export default ProjectDetailPage