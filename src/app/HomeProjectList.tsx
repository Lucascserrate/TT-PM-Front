'use client'
import { IProject } from '@/interface/interface'
import { useGetProjectQuery } from '@/services/project'
import Link from 'next/link'

const HomeProjectList = () => {
    const { data } = useGetProjectQuery(null)
    return (
        <div className='flex flex-col gap-2'>
            {
                data?.length === 0
                    ? <div className='text-neutral-600'>No hay proyectos</div>
                    : data?.map((e: IProject, i: number) => (
                        <Link key={i} href={`/project/${e?.id}`} className='p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md'>
                            <div className='text-neutral-600 '>{e?.name}</div>
                        </Link>
                    ))
            }
        </div>
    )
}

export default HomeProjectList