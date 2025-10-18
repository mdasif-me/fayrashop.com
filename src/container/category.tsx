'use client'
import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const categories = [
  { name: 'Computer & Laptop', image: 'https://placehold.co/300x300.png' },
  { name: 'SmartPhone', image: 'https://placehold.co/300x300.png' },
  { name: 'Headphones', image: 'https://placehold.co/300x300.png' },
  { name: 'Accessories', image: 'https://placehold.co/300x300.png' },
  { name: 'Camera & Photo', image: 'https://placehold.co/300x300.png' },
  { name: 'TV & Homes', image: 'https://placehold.co/300x300.png' },
  { name: 'Accessories', image: 'https://placehold.co/300x300.png' },
  { name: 'Camera & Photo', image: 'https://placehold.co/300x300.png' },
  { name: 'TV & Homes', image: 'https://placehold.co/300x300.png' },
]

export default function Category() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="container mx-auto px-4 py-10 lg:px-0">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold">Shop with Categorys</h2>
      </div>

      <div className="relative w-full">
        <Carousel
          opts={{
            align: 'start',
            skipSnaps: false,
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <Card className="border transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-between p-4">
                    <div className="relative flex h-36 w-full items-center justify-center sm:h-40 md:h-44 lg:h-48">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-medium">{category.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-primary absolute top-1/2 -left-4 z-10 -translate-y-1/2 rounded-full" />
          <CarouselNext className="bg-primary absolute top-1/2 -right-4 z-10 -translate-y-1/2 rounded-full" />
        </Carousel>
      </div>
    </section>
  )
}
