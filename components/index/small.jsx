import { useViewportScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import useMediaQuery from '../../utils/mediaQuery'
import useWindowSize from '../../utils/windowSize'

export default function IndexSmall () {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const { height, width } = useWindowSize()

  const deviceRef = useRef(null)
  const [deviceHeight, setDeviceHeight] = useState(0)
  const [deviceWidth, setDeviceWidth] = useState(0)
  const [deviceTop, setDeviceTop] = useState(0)
  useEffect(() => {
    if (deviceRef.current) {
      setDeviceWidth(deviceRef.current.getBoundingClientRect().height)
      setDeviceWidth(width)
      setDeviceTop(deviceRef.current.getBoundingClientRect().top)
    }
  }, [height, deviceRef])
  const deviceTrueWidth = useMemo(() => {
    if (deviceWidth / deviceHeight >= 1414 / 2902) {
      return deviceWidth
    } else {
      return (deviceHeight / 2902) * 1414
    }
  }, [deviceHeight, deviceWidth])

  const { scrollY } = useViewportScroll()
  const deviceY = useTransform(scrollY, [0, deviceTop], [0, -deviceTop])
  const contentY = useTransform(
    scrollY,
    [deviceTop, height * 2],
    [0, -((deviceWidth / 1414) * (4388 - 2268))]
  )

  const children = useMemo(() => {
    if (darkMode) {
      return (
        <Image
          src={`/content/dark.jpg`}
          quality={100}
          priority
          width={(deviceTrueWidth / 1414) * 1284}
          height={(deviceTrueWidth / 1284) * 4388}
        />
      )
    } else {
      return (
        <Image
          src={`/content/light.jpg`}
          quality={100}
          priority
          width={(deviceTrueWidth / 1414) * 1284}
          height={(deviceTrueWidth / 1284) * 4388}
        />
      )
    }
  }, [darkMode, deviceTrueWidth])

  return (
    <motion.div
      ref={deviceRef}
      className='relative bg-contain bg-no-repeat bg-center bg-device-light dark:bg-device-dark bg-backgroundLight dark:bg-backgroundDark'
      style={{ height, width, y: deviceY }}
    >
      <div
        className='absolute overflow-hidden inset-x-1/2'
        style={{
          top: (deviceTrueWidth / 1414) * 335
        }}
      >
        <motion.div
          className='relative'
          style={{ y: contentY }}
          children={children}
        />
      </div>
    </motion.div>
  )
}
