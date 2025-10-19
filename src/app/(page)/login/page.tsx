'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

interface LoginProps {
  heading?: string
  logo: {
    url: string
    src: string
    alt: string
    title?: string
  }
  buttonText?: string
}

export default function Login({ heading = 'Sign In', buttonText = 'Sign Up' }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin')

  return (
    <section className="bg-muted flex h-screen items-center justify-center transition-all duration-500 ease-in-out">
      <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded border px-6 py-8 shadow-2xl">
        <div className="relative mb-6 flex w-full cursor-pointer">
          <div className="flex w-1/2 flex-col text-center" onClick={() => setActiveTab('signin')}>
            <h1 className="pb-4 text-xl font-semibold text-gray-700">{heading}</h1>
          </div>

          <div className="flex w-1/2 flex-col text-center" onClick={() => setActiveTab('signup')}>
            <h1 className="pb-4 text-xl font-semibold text-gray-700">{buttonText}</h1>
          </div>

          <span
            className={`bg-primary absolute bottom-0 left-0 h-1 w-1/2 transition-transform duration-300 ease-in-out ${
              activeTab === 'signup' ? 'translate-x-full' : ''
            }`}
          />
        </div>

        <div className="mb-4 flex w-full flex-col gap-2">
          <Label>Email Address</Label>
          <Input type="email" className="h-11 rounded text-base" required />
        </div>

        <div className="relative flex w-full flex-col gap-2">
          <div className="flex justify-between">
            <Label>Password</Label>
            <a href="#" className="text-primary text-sm hover:underline">
              Forget Password
            </a>
          </div>
          <Input
            type={showPassword ? 'text' : 'password'}
            className="h-11 pr-10 text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3 pt-1"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button type="submit" className="bg-primary mt-6 w-full font-semibold">
          {activeTab === 'signin' ? heading : buttonText} →
        </Button>
      </div>
    </section>
  )
}
