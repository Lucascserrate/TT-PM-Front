import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IconPlus } from '@tabler/icons-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import DatePickerWithRange from './DatePickerWithRange';
import { addDays, format } from 'date-fns';
import axios from 'axios';


const AddProject = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState({
        from: format(new Date(2024, 9, 3), "yyyy-MM-dd"),
        to: format(addDays(new Date(2024, 9, 3), 20), "yyyy-MM-dd"),
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        axios.post("http://localhost:3001/projects", {
            name,
            description,
            finalDate: date.to,
            initialDate: date.from
        })
        setOpen(false)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger className="flex items-center gap-2 py-2 cursor-pointer">
                    <IconPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                    <div className="text-neutral-700 dark:text-neutral-200 text-sm font-medium text-nowrap">Agregar proyecto</div>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Crea tu nuevo {" "}
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            proyecto
                        </span>
                        ! 🚀
                    </DialogTitle>
                    <div className='flex flex-col gap-2'>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del proyecto" />
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción del proyecto" />
                        <DatePickerWithRange date={date} setDate={setDate} />
                    </div>
                    <DialogFooter className="gap-4">
                        <button onClick={handleSubmit} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 disabled:bg-black/80" disabled={name === ""}>
                            Crear
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddProject