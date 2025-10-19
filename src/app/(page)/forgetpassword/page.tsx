'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ForgetPassword = () => {
  return (
    <section className="bg-muted flex h-screen items-center justify-center transition-all duration-500 ease-in-out">
      <div className="flex w-full max-w-sm min-w-sm flex-col gap-y-4 rounded border px-6 py-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="pb-3 text-xl font-semibold">Forget Password</h1>
          <p className="text-sm font-normal">
            Enter the email address or mobile phone number associated with your Clicon account.
          </p>
        </div>

        <div className="mb-4 flex w-full flex-col gap-2">
          <Label>Email Address</Label>
          <Input type="email" className="h-11 rounded text-base" required />
        </div>

        <Button type="submit" className="bg-primary h-11 w-full font-semibold">
          Send Code →
        </Button>
        <div className="border-b pb-6">
          <div className="flex gap-2">
            <p className="text-sm">Already have account?</p>
            <a className="text-primary text-sm" href="">
              Sign In
            </a>
          </div>
          <div className="flex gap-2">
            <p className="text-sm">Already have account?</p>
            <a className="text-primary text-sm" href="">
              Sign In
            </a>
          </div>
        </div>
        <div className="">
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
