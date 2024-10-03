'use client'
import { useEffect, useState } from 'react'
import TaskSection from '@/components/TaskSection'
import { Textarea } from '@/components/ui/textarea'
import { useDeleteProjectMutation, useGetProjectByIdQuery, useUpdateProjectMutation } from '@/services/project'
import { IconEdit, IconTrash, IconTrashX } from '@tabler/icons-react'
import { useParams, useRouter } from 'next/navigation'

const ProjectDetailPage = () => {
    const router = useRouter()
    const { id } = useParams();
    const projectId = String(id)

    const [textareaDisabled, setTextareaDisabled] = useState<boolean>(true)
    const [description, setDescription] = useState<string>('')

    const { data: project } = useGetProjectByIdQuery(projectId);
    const [updateProject] = useUpdateProjectMutation();
    const [deleteProject] = useDeleteProjectMutation();

    useEffect(() => {
        if (project) {
            setDescription(project.description); // Inicializa la descripción
        }
    }, [project]);

    const handleDescriptionSave = async () => {
        if (!textareaDisabled && project) {
            try {
                // Llamamos a la mutación para actualizar el proyecto
                await updateProject({ id: projectId, description }).unwrap();

                console.log('Descripción actualizada');
                setTextareaDisabled(true); // Deshabilitamos el textarea nuevamente
            } catch (error) {
                console.error('Error al actualizar la descripción:', error);
            }
        }
    };

    const handleDeleteProject = async () => {
        if (project) {
            try {
                // Llamamos a la mutación para eliminar el proyecto
                await deleteProject(projectId).unwrap();
                router.push('/');
            } catch (error) {
                console.error('Error al eliminar el proyecto:', error);
            }
        }
    }

    return (
        <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 py-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-semibold'>{project?.name}</h1>
                <IconTrash className='text-gray-600 cursor-pointer' onClick={handleDeleteProject} />
            </div>
            <hr />
            <div className='flex gap-2 py-3'>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descripción' onBlur={handleDescriptionSave} disabled={textareaDisabled} className={`${textareaDisabled && 'border-none shadow-none'} resize-none`} />
                <IconEdit className='cursor-pointer' onClick={() => setTextareaDisabled(!textareaDisabled)} />
            </div>
            <TaskSection />
        </div>
    )
}

export default ProjectDetailPage