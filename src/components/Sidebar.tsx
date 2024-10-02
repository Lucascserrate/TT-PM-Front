"use client";
import React, { useState } from "react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconPlus,
    IconSettings,
    IconUser,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import { Logo, LogoIcon } from './Logo';
import SidebarProjectList from './SidebarProjectList';
import AddProject from './AddProject';

export function SidebarView() {
    const [projectList, setProjectList]: any = useState([]);
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
                            <SidebarProjectList projectList={projectList} setProjectList={setProjectList} />
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
        </>
    );
}
