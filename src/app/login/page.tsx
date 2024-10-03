'use client'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const [open, setOpen] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (!open) {
            router.push('/')
        }
    }, [open, router])

    const handleSubmit = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent>
                <DialogTitle className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
                    Inicia sesión
                </DialogTitle>
                <div className='flex flex-col gap-2 mb-4'>
                    <Input type='email' placeholder="Email" />
                    <Input type='password' placeholder="Password" />
                </div>
                <DialogFooter className="gap-4">
                    <button
                        className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 disabled:bg-black/80"
                        onClick={handleSubmit} >
                        Empezar
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default LoginPage