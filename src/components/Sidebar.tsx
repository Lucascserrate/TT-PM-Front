"use client";
import { useState } from "react";
import {
    IconBrandTabler,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody } from './ui/sidebar';
import { Logo, LogoIcon } from './Logo';
import SidebarProjectList from './SidebarProjectList';
import AddProject from './AddProject';
import SidebarLoginSection from './SidebarLoginSection';

export function SidebarView() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            <AddProject />
                            <div className='flex items-center gap-2 py-1'>
                                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                <div className="text-neutral-700 dark:text-neutral-200 text-sm font-medium">Proyectos</div>
                            </div>
                            <SidebarProjectList />
                        </div>
                    </div>
                    <SidebarLoginSection />
                </SidebarBody>
            </Sidebar>
        </>
    );
}
