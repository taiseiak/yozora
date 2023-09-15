import { Stars } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export function NightSky({ afterLoadCallback = () => {} }) {
  const { camera } = useThree()

  useFrame((_, delta) => {
    camera.rotation.y += delta * 0.02
  })

  useEffect(() => {
    afterLoadCallback()
  })

  return (
    <>
      <Stars saturation={100} factor={6} />
    </>
  )
}
