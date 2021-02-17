import React from 'react'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <div className='mb-4'>
        一款简洁的
        <a href='https://joinmastodon.org/' target='_blank'>
          长毛象
        </a>
        手机客户端。专为中文用户社区打造。
      </div>
      <div className='mb-4'>
        A simple yet elegant mobile app client for{' '}
        <a href='https://joinmastodon.org/' target='_blank'>
          Mastodon
        </a>
        . Catered mainly for Chinese community.
      </div>

      <a href='https://apps.apple.com/app/google/id284815942' target='_blank'>
        <img src={`/store/apple/dark.svg`} className='w-36 lg:w-48 my-4' />
      </a>
      <a
        href='https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
        target='_blank'
      >
        <img src={`/store/google/dark.svg`} className='w-36 lg:w-48' />
      </a>
    </Layout>
  )
}

export default Index
