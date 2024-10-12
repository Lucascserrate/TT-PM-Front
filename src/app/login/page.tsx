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
import { useLoginMutation, useRegisterMutation } from '@/services/auth'

const LoginPage = () => {
    const [open, setOpen] = useState(true)
    const [openRegister, setOpenRegister] = useState(false)
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' })
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const router = useRouter()

    const [register] = useRegisterMutation()
    const [login] = useLoginMutation()

    useEffect(() => {
        if (!open) {
            router.push('/')
        }
    }, [open, router])

    const onRegister = () => {
        try {
            register(registerForm).unwrap()
            setOpenRegister(false)
            setOpen(false)
        } catch (error) {
            console.error(error)
            alert('Error al registrarse')
        }
    }

    const onLogin = () => {
        try {
            login(registerForm).unwrap()
            setOpen(false)
        } catch (error) {
            console.error(error)
            alert('Error al iniciar sesión')
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent>
                <DialogTitle className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
                    {openRegister ? 'Registrate' : 'Inicia sesión'}
                </DialogTitle>
                {
                    openRegister
                        ? <div className='flex flex-col gap-2 mb-4'>
                            <Input type='text' placeholder="Nombre" value={registerForm.name} onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })} required />
                            <Input type='email' placeholder="Email" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} required />
                            <Input type='password' placeholder="Contraseña" value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} required />
                        </div>
                        : <div className='flex flex-col gap-2 mb-4'>
                            <Input type='email' placeholder="Email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
                            <Input type='password' placeholder="Contraseña" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
                        </div>
                }
                {
                    openRegister
                        ? <div className='text-sm'>Ya tienes cuenta? <span className='text-blue-500 cursor-pointer' onClick={() => setOpenRegister(false)}>Inicia sesión</span></div>
                        : <div className='text-sm'>No tienes cuenta? <span className='text-blue-500 cursor-pointer' onClick={() => setOpenRegister(true)}>Registrate</span></div>
                }
                <DialogFooter className="gap-4">
                    <button
                        className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 disabled:bg-black/80"
                        onClick={openRegister ? onRegister : onLogin}
                        disabled={openRegister ? !registerForm.name || !registerForm.email || !registerForm.password : !loginForm.email || !loginForm.password}
                    >
                        {openRegister ? 'Empezar' : 'Iniciar sesión'}
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default LoginPage