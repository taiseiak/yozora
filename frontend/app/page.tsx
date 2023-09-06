'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { View } from '@/components/canvas/View'

const ViewWithLoader = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const NightSky = dynamic(() => import('@/components/canvas/NightSky').then((mod) => mod.NightSky), { ssr: false })

export default function Page() {
  const [nightSkyLoaded, setNightSkyLoaded] = useState(false)

  return (
    <>
      <div className='flex h-screen w-full snap-center flex-col items-center justify-center bg-slate-800'>
        <div
          className={`pointer-events-none absolute inset-0 z-[1] bg-slate-800 transition-opacity duration-[2s] ${
            nightSkyLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <h1
          className={`font-crimson z-10 text-9xl font-bold uppercase tracking-widest text-stone-300 transition-all duration-1000 ${
            nightSkyLoaded ? 'no-clip' : 'slide-down'
          }`}
        >
          Yozora
        </h1>
        <h3
          className={`font-crimson z-10 text-2xl font-thin uppercase tracking-widest text-stone-300 transition-all delay-700 duration-1000 ${
            nightSkyLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Scroll to see memories
        </h3>
      </div>
      <div className='flex h-screen w-full snap-center flex-col items-center justify-center bg-red-400'>
        <h1>Another div</h1>
      </div>
      <View className='absolute inset-0 h-screen w-full -z-10'>
        <Suspense fallback={null}>
          <NightSky
            afterLoadCallback={() => {
              setNightSkyLoaded(true)
            }}
          />
        </Suspense>
      </View>
    </>
  )
}
