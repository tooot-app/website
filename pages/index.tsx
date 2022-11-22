import React, { useEffect } from 'react'
import { isIOS, isAndroid, isMobile } from 'react-device-detect'
import Layout from '../components/layout'

const Index = () => {
  useEffect(() => {
    if (isMobile && isIOS) {
      window.open('itms-appss://itunes.apple.com/app/id1549772269')
    }
    if (isMobile && isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot')
    }
  }, [])

  return (
    <Layout
      title='tooot 📱'
      description='一款简洁的长毛象手机客户端。专为中文用户社区打造。A simple yet elegant mobile app client for Mastodon. Catered mainly for Chinese community.'
    >
      <div className='font-medium mb-4'>
        起始于专注中文社区的简洁、开源长毛象手机客户端。跨平台支持iOS和Android。
      </div>
      <div className='mb-8 lg:mb-24 font-medium'>
        Simple and open source mobile client of Mastodon, started with a focus for Chinese
        community. Support both iOS and Android.
      </div>

      <a href='https://apps.apple.com/app/id1549772269' target='_blank' className='self-start'>
        <img src={`/store/apple/light.svg`} className='w-36 lg:w-48' />
      </a>
      <a
        href='https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
        target='_blank'
        className='self-start'
      >
        <img src={`/store/google/dark.svg`} className='w-36 lg:w-48 my-4' />
      </a>
    </Layout>
  )
}

export default Index
