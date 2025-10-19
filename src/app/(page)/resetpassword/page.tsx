'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <section className="bg-muted flex h-screen items-center justify-center transition-all duration-500 ease-in-out">
      <div className="flex w-full max-w-sm min-w-sm flex-col gap-y-4 rounded border px-6 py-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="pb-3 text-xl font-semibold">Reset Password</h1>
          <p className="text-sm font-normal">
            Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc,
            fringilla sit amet nunc.
          </p>
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
            type={showConfirmPassword ? 'text' : 'password'}
            className="h-11 pr-10 text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-9 right-3"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button type="submit" className="bg-primary h-11 w-full font-semibold">
          Send Code →
        </Button>

        <div className="mt-4 border-b pb-6">
          <div className="flex gap-2">
            <p className="text-sm">Already have account?</p>
            <a className="text-primary text-sm" href="">
              Sign In
            </a>
          </div>
        </div>

        <div className="mt-4 text-sm">
          <p>
            You may contact{' '}
            <a className="text-primary" href="">
              Customer Service
            </a>{' '}
            for help restoring access to your account.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ForgetPassword
