import { useViewportScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import Layout from '../components/layout'
import useMediaQuery from '../utils/mediaQuery'
import useWindowSize from '../utils/windowSize'

export default function Home () {
  const breakpointLarge = useMediaQuery('(min-width: 1024px)')
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [height] = useWindowSize()
  const [deviceContainerWidth, setDeviceContainerWidth] = useState(0)
  const deviceContainerRef = useRef(null)
  useEffect(() => {
    if (deviceContainerRef.current) {
      setDeviceContainerWidth(
        (deviceContainerRef.current.clientHeight / 2902) * 1414
      )
    }
  }, [height, deviceContainerRef])

  const { scrollYProgress } = useViewportScroll()
  const storesX = useTransform(
    scrollYProgress,
    [0.75, 1],
    [0, breakpointLarge ? 350 : 0]
  )
  const deviceX = useTransform(scrollYProgress, [0.75, 1], [0, -350])
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.75],
    [0, -((deviceContainerWidth / 1414) * (4388 - 2268))]
  )

  const content = useMemo(() => {
    if (darkMode) {
      return (
        <Image
          src={`/content/dark.jpg`}
          quality={100}
          priority
          width={(deviceContainerWidth / 1414) * 1284}
          height={(deviceContainerWidth / 1414) * 4388}
        />
      )
    } else {
      return (
        <Image
          src={`/content/light.jpg`}
          quality={100}
          priority
          width={(deviceContainerWidth / 1414) * 1284}
          height={(deviceContainerWidth / 1414) * 4388}
        />
      )
    }
  }, [darkMode, deviceContainerWidth])
  const stores = useMemo(() => {
    return (
      <>
        <a href='https://apps.apple.com/app/google/id284815942' target='_blank'>
          <img
            src={`/store/apple/${darkMode ? 'dark' : 'light'}.svg`}
            className='w-52 mb-8'
          />
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=com.apple.android.music'
          target='_blank'
        >
          <img src={`/store/google/dark.svg`} className='w-52' />
        </a>
      </>
    )
  }, [darkMode])

  return (
    <Layout>
      <motion.div
        className='absolute w-52 h-full flex flex-col justify-center'
        style={{ x: storesX }}
      >
        {stores}
      </motion.div>
      <motion.div
        ref={deviceContainerRef}
        className='flex h-full bg-contain bg-no-repeat bg-center relative bg-device-light dark:bg-device-dark'
        style={{ x: deviceX, width: deviceContainerWidth }}
      >
        <div className='device-content absolute overflow-hidden'>
          <motion.div
            className='relative'
            style={{ y: contentY }}
            transition={{ type: 'spring', bounce: 0.25 }}
          >
            {content}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}
