'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

interface SignupProps {
  heading?: string
  logo?: {
    url?: string
    src?: string
    alt?: string
    title?: string
  }
  buttonText?: string
  googleText?: string
  signupText?: string
  signupUrl?: string
}

const Signup = ({ heading = 'Signup', buttonText = 'Create Account' }: SignupProps) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signup')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <section className="bg-muted flex h-screen items-center justify-center transition-all duration-500 ease-in-out">
      <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded border px-6 py-8 shadow-2xl">
        <div className="relative mb-6 flex w-full cursor-pointer">
          <div className="flex w-1/2 flex-col text-center" onClick={() => setActiveTab('signin')}>
            <h1 className="pb-4 text-xl font-semibold">Sign In</h1>
          </div>

          <div className="flex w-1/2 flex-col text-center" onClick={() => setActiveTab('signup')}>
            <h1 className="pb-4 text-xl font-semibold">{heading}</h1>
          </div>

          <span
            className={`bg-primary absolute bottom-0 left-0 h-1 w-1/2 transition-transform duration-300 ease-in-out ${
              activeTab === 'signup' ? 'translate-x-full' : ''
            }`}
          />
        </div>

        <div className="mb-4 flex w-full flex-col gap-2">
          <Label>Name</Label>
          <Input type="text" className="h-11 rounded text-base" required />
        </div>

        <div className="mb-4 flex w-full flex-col gap-2">
          <Label>Email Address</Label>
          <Input type="email" className="h-11 rounded text-base" required />
        </div>

        <div className="relative mb-4 flex w-full flex-col gap-2">
          <Label>Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="8+ characters"
            className="h-11 pr-10 text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative mb-4 flex w-full flex-col gap-2">
          <Label>Confirm Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            className="h-11 pr-10 text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showPassword)}
            className="absolute top-9 right-3"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button type="submit" className="bg-primary mt-6 w-full font-semibold">
          {activeTab === 'signin' ? 'Sign In' : buttonText} →
        </Button>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <Input type="checkbox" className="accent-primary h-6 w-6 rounded" required />
          <p>
            Are you agree to Clicon <span className="text-primary">Terms of Condition</span> and
            <span className="text-primary"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup
