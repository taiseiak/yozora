'use client'

import { forwardRef, LegacyRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { ForwardRefComponent } from '@react-three/drei/helpers/ts-utils'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight args={[0.5]} />
    <pointLight position={[-10, -10, -10]} args={['blue']} />
    <PerspectiveCamera makeDefault args={[40]} position={[0, 0, 6]} />
  </Suspense>
)

type ViewProps = {
  children?: React.ReactNode
  orbit?: boolean
}

const View: ForwardRefComponent<ViewProps & React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = forwardRef(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    )
  },
)
View.displayName = 'View'

export { View }
