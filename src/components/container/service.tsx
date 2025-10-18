'use client'
import React from 'react'
import { Package, Trophy, CreditCard, Headphones } from 'lucide-react'

const services = [
  {
    icon: <Package className="h-8 w-8" />,
    title: 'FASTED DELIVERY',
    desc: 'Delivery in 24/H',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: '24 HOURS RETURN',
    desc: '100% money-back guarantee',
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'SECURE PAYMENT',
    desc: 'Your money is safe',
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: 'SUPPORT 24/7',
    desc: 'Live contact/message',
  },
]

function Service() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto rounded-lg border shadow-sm lg:p-4">
        <div className="grid grid-cols-2 divide-y text-center md:grid-cols-4 md:divide-x md:divide-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 lg:flex-row lg:justify-center lg:gap-4"
            >
              <div className="mb-3">{service.icon}</div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-semibold md:text-base">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
