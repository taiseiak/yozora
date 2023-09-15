'use client'

import { Image, PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'
import { View } from './View'
import { useInView } from 'react-intersection-observer'

type SlideInMemoryProps = {
  transitionDuration?: string
  slideInDirection?: 'left' | 'right'
  triggerOnce?: boolean
}

export default function SlideInMemory({
  transitionDuration = '2000ms',
  slideInDirection = 'left',
  triggerOnce = true,
}: SlideInMemoryProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    rootMargin: '-20%',
  })

  const defaultPosition = slideInDirection === 'left' ? '-translate-x-[80%]' : 'translate-x-[80%]'

  return (
    <View
      ref={ref}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`duration-[2000ms] inset-0 h-full w-full transition-all ${inView ? 'translate-x-0' : defaultPosition}`}
    >
      <Suspense fallback={null}>
        <PresentationControls
          // global
          snap
          zoom={0.8}
          rotation={[0, Math.PI * 0.05, 0]}
          polar={[0, Math.PI / 8]}
          azimuth={[-Math.PI / 8, Math.PI / 8]}
        >
          <Image transparent url='/img/memories/night_street.JPG' scale={5} />
        </PresentationControls>
      </Suspense>
    </View>
  )
}
