import { IProject } from '@/interface/interface';
import { SidebarLink } from './ui/sidebar';
import { useGetProjectQuery } from '@/services/project';

const SidebarProjectList: React.FC = () => {

  const { data } = useGetProjectQuery(null)

  return (
    <div className='flex flex-col gap-2'>
      {data?.length === 0
        ? <SidebarLink link={{ label: "No hay proyectos", href: "#" }} className='cursor-default text-neutral-600' />
        : data?.map((e: IProject, i: number) => (
          <SidebarLink key={i} link={{ label: e?.name, href: `/project/${e?.id}` }} />
        ))}
    </div>
  )
}

export default SidebarProjectList