'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useRef, useState } from 'react'
import { View } from '@/components/canvas/View'
import Scroll, { ScrollTicker } from '@/templates/Scroll'
import { Image, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SlideInMemory from '@/components/canvas/SlideInMemory'

const NightSky = dynamic(() => import('@/components/canvas/NightSky').then((mod) => mod.NightSky), { ssr: false })

export default function Page() {
  const [nightSkyLoaded, setNightSkyLoaded] = useState(false)

  return (
    <>
      <div className='pointer-events-none fixed inset-0 -z-50 h-screen w-screen bg-slate-800' />
      <Scroll>
        <div className='fixed inset-0 h-screen w-screen -z-30 pointer-events-none'>
          <Canvas>
            <ScrollTicker />
            <color attach='background' args={['rgb(30,41,59)']} />
            <Suspense fallback={null}>
              <NightSky
                afterLoadCallback={() => {
                  setNightSkyLoaded(true)
                }}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <div
            className={`pointer-events-none absolute inset-0 -z-10 bg-slate-800 transition-opacity duration-[2s] ${
              nightSkyLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <h1 className={`font-crimson text-6xl font-bold uppercase tracking-widest text-stone-300 md:text-9xl`}>
            Yozora
          </h1>
          <h3
            className={`font-crimson text-lg font-thin uppercase tracking-widest text-stone-300 transition-opacity delay-700 duration-1000 ${
              nightSkyLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Scroll to see memories
          </h3>
        </div>
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <SlideInMemory />
        </div>
      </Scroll>
    </>
  )
}
