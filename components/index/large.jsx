import { useViewportScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import useMediaQuery from '../../utils/mediaQuery'
import useWindowSize from '../../utils/windowSize'

const deviceDefault =
  'relative flex bg-contain bg-no-repeat bg-center bg-device-light dark:bg-device-dark'
const deviceSmall = ''
const deviceLarge = 'h-full'

export default function IndexLarge () {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const { height } = useWindowSize()

  const deviceRef = useRef(null)
  const [deviceWidth, setDeviceWidth] = useState(0)
  useEffect(() => {
    if (deviceRef.current) {
      setDeviceWidth((deviceRef.current.clientHeight / 2902) * 1414)
    }
  }, [height, deviceRef])

  const { scrollYProgress } = useViewportScroll()
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((deviceWidth / 1414) * (4388 - 2268))]
  )

  const children = useMemo(() => {
    if (darkMode) {
      return (
        <Image
          src={`/content/dark.jpg`}
          quality={100}
          priority
          width={(deviceWidth / 1414) * 1284}
          height={(deviceWidth / 1414) * 4388}
        />
      )
    } else {
      return (
        <Image
          src={`/content/light.jpg`}
          quality={100}
          priority
          width={(deviceWidth / 1414) * 1284}
          height={(deviceWidth / 1414) * 4388}
        />
      )
    }
  }, [darkMode, deviceWidth])

  return (
    <motion.div
      ref={deviceRef}
      className={`${deviceDefault} ${deviceSmall} ${deviceLarge}`}
      style={{ width: deviceWidth }}
    >
      <div className='device-content-large absolute overflow-hidden'>
        <motion.div
          className='relative'
          style={{ y: contentY }}
          children={children}
        />
      </div>
    </motion.div>
  )
}
