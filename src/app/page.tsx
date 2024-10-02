import { SidebarView } from '@/components/Sidebar';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from "next/image";

export default function Home() {
  const words = [
    {
      text: "Bienvenid@",
    },
    {
      text: "a",
    },
    {
      text: "ProManage.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 py-10'>
      <TypewriterEffectSmooth words={words} />
      <div>Selecciona un proyecto</div>

    </div>
  );
}
