import { useEffect } from 'react'
import axios from 'axios';
import { IProject } from '@/interface/interface';
import { SidebarLink } from './ui/sidebar';


interface SidebarProjectListProps {
  projectList: any[]
  setProjectList: React.Dispatch<React.SetStateAction<[]>>
}

const SidebarProjectList: React.FC<SidebarProjectListProps> = ({ projectList, setProjectList }) => {

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((res) => {
      setProjectList(res.data);
    })
  }, [projectList])
  return (
    <div className='flex flex-col gap-2'>
      {projectList?.map((e: IProject, i: number) => (
        <SidebarLink key={i} link={{ label: e?.name, href: `/${e?.id}` }} />
      ))}
    </div>
  )
}

export default SidebarProjectList