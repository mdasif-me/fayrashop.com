import React from 'react'
import Image from 'next/image'

export default function Overall() {
  const sections = [
    {
      title: 'FLASH SALE TODAY',
      products: [
        {
          name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Simple Mobile 4G LTE Prepaid Smartphone',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: '4K UHD LED Smart TV with Chromecast Built-in',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
      ],
    },
    {
      title: 'BEST SELLERS',
      products: [
        {
          name: 'Samsung Electronics Samsung Galaxy S21 5G',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
      ],
    },
    {
      title: 'TOP RATED',
      products: [
        {
          name: 'Portable Washing Machine, 11lbs capacity Model 18NMF...',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
      ],
    },
    {
      title: 'NEW ARRIVAL',
      products: [
        {
          name: 'TOZO T6 True Wireless Earbuds Bluetooth Headpho...',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
        {
          name: 'Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Cam...',
          img: 'https://placehold.co/200x200.png',
          price: '$1,500',
        },
      ],
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="mb-5 text-[15px] font-semibold tracking-wide uppercase">
              {section.title}
            </h3>

            <div className="space-y-4">
              {section.products.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border p-3 transition hover:shadow"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="max-w-[160px] truncate text-[13px] leading-tight font-medium">
                      {item.name}
                    </p>
                    <p className="text-primary mt-1 text-[13px] font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
