import { Cover } from '@/components/ui/cover';

export default function Home() {

  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 py-10'>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Bienvenido a <Cover>ProManage</Cover>
      </h1>
      <div>Selecciona un proyecto</div>

    </div>
  );
}
