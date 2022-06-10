import React, { useEffect } from 'react'
import { isIOS, isAndroid, isMobile } from 'react-device-detect'
import { DownloadCloud } from 'react-feather'
import Layout from '../components/layout'

const Index = () => {
  useEffect(() => {
    if (isMobile && isIOS) {
      window.open('itms-appss://itunes.apple.com/app/id1549772269')
    }
    if (isMobile && isAndroid) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
      )
    }
  }, [])

  return (
    <Layout
      title='tooot 📱'
      description='一款简洁的长毛象手机客户端。专为中文用户社区打造。A simple yet elegant mobile app client for Mastodon. Catered mainly for Chinese community.'
    >
      <div className='font-medium'>
        一款简洁的
        <a href='https://joinmastodon.org/' target='_blank'>
          长毛象
        </a>
        手机客户端。专为中文用户社区打造。
      </div>
      <div className='mb-8 lg:mb-24 font-medium'>
        A simple yet elegant mobile app client for{' '}
        <a href='https://joinmastodon.org/' target='_blank'>
          Mastodon
        </a>
        . Catered mainly for Chinese community.
      </div>

      <a
        href='https://apps.apple.com/app/id1549772269'
        target='_blank'
        className='self-start'
      >
        <img src={`/store/apple/light.svg`} className='w-36 lg:w-48' />
      </a>
      <a
        href='https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
        target='_blank'
        className='self-start'
      >
        <img src={`/store/google/dark.svg`} className='w-36 lg:w-48 my-4' />
      </a>
      <a href='/tooot-latest.apk'>
        <DownloadCloud size='1rem' className='inline-block align-text-top' />{' '}
        tooot-latest.apk
      </a>
      <p className='overflow-x-scroll whitespace-nowrap text-sm no-scrollbar'>
        SHA256: {require('../public/checksum.json').checksum}
      </p>
    </Layout>
  )
}

export default Index
