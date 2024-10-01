"use client";
import React, { useState } from "react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import { Logo, LogoIcon } from './Logo';
import Dashboard from './Dashboard';

export function SidebarView() {
    const projects = [
        {
            label: "Minimalista",
            href: "#",
        },
        {
            label: "Project Countries",
            href: "#",
        },

    ];
    const [open, setOpen] = useState(true);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            <div className='flex items-center gap-2 py-1'>
                                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                <div className="text-neutral-700 dark:text-neutral-200 text-sm font-medium">Proyectos</div>
                            </div>
                            {projects.map((e, i) => (
                                <SidebarLink key={i} link={e} />
                            ))}
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
            <Dashboard />
        </div>
    );
}
