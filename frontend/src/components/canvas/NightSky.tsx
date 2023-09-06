import { Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export function NightSky({ afterLoadCallback = () => {} }) {
  const ref = useRef(null!)
  useFrame((_, delta) => {
    // if (ref.current.count < maxStars) {
    //   ref.current.count += ref.current.count
    // }
  })

  useEffect(() => {
    afterLoadCallback()
  })
  return (
    <>
      <Stars saturation={100} factor={6} ref={ref} />
    </>
  )
}
