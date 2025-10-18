import Image from 'next/image'
import React from 'react'

export default function PromotionCard() {
  return (
    <section className="container mx-auto grid gap-6 py-10 md:grid-cols-2">
      {/* Apple HomePod Mini Card */}
      <div className="flex flex-col items-center justify-between gap-5 rounded-xl p-11 shadow-sm md:flex-row lg:gap-0">
        <div className="max-w-2xs flex-1 text-center lg:text-left">
          <span className="inline-block rounded bg-blue-400 px-2 py-1 text-xs font-semibold text-white uppercase">
            Introducing
          </span>
          <h2 className="mt-2 text-3xl font-semibold">New Apple Homepod Mini</h2>
          <p className="mt-3 text-base">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <button className="bg-primary mt-5 rounded-md px-5 py-2.5 text-sm font-bold text-white">
            SHOP NOW →
          </button>
        </div>

        <div className="relative">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Apple HomePod Mini"
            width={200}
            height={200}
            className="object-contain sm:w-36 md:w-44 lg:w-60"
          />
        </div>
      </div>

      {/* Xiaomi Mi 11 Ultra Card */}
      <div className="flex flex-col items-center justify-between gap-5 rounded-xl bg-black p-11 text-white shadow-sm md:flex-row lg:gap-0">
        <div className="max-w-2xs flex-1 text-center lg:text-left">
          <span className="inline-block rounded bg-yellow-400 px-2 py-1 text-xs font-semibold text-black uppercase">
            Introducing New
          </span>
          <h2 className="mt-2 text-3xl font-semibold">
            Xiaomi Mi 11 Ultra <br /> 12GB + 256GB
          </h2>
          <p className="mt-3 text-base text-white/60">
            *Data provided by internal laboratories. Industry measurement.
          </p>
          <button className="bg-primary mt-5 rounded-md px-5 py-2.5 text-sm font-bold text-white">
            SHOP NOW →
          </button>
        </div>

        <div className="relative">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Apple HomePod Mini"
            width={200}
            height={200}
            className="object-contain sm:w-36 md:w-44 lg:w-60"
          />
        </div>

        <span className="absolute top-4 right-4 rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
          $590
        </span>
      </div>
    </section>
  )
}
