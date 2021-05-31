import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { isIOS, isAndroid } from 'react-device-detect'
import { DownloadCloud } from 'react-feather'
import StarRatingComponent from 'react-star-rating-component'
import Layout from '../components/layout'

const Index = ({ apple }) => {
  useEffect(() => {
    const script = document.createElement('script')
    document.head.appendChild(script)
    script.src = 'https://betteruptime.com/widgets/announcement.js'
    script.attributes['data-id'] = '124304'
    script.async = true
  }, [])

  useEffect(() => {
    if (isIOS) {
      window.open('itms-appss://itunes.apple.com/app/id1549772269')
    }
    if (isAndroid) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
      )
    }
  }, [])

  return (
    <Layout
      title='tooot'
      description='一款简洁的长毛象手机客户端。专为中文用户社区打造。A simple yet elegant mobile app client for Mastodon. Catered mainly for Chinese community.'
    >
      <div className='mb-4'>
        一款简洁的
        <a href='https://joinmastodon.org/' target='_blank'>
          长毛象
        </a>
        手机客户端。专为中文用户社区打造。
      </div>
      <div className='mb-8 lg:mb-12'>
        A simple yet elegant mobile app client for{' '}
        <a href='https://joinmastodon.org/' target='_blank'>
          Mastodon
        </a>
        . Catered mainly for Chinese community.
      </div>

      <a href='https://apps.apple.com/app/id1549772269' target='_blank'>
        <img src={`/store/apple/dark.svg`} className='w-36 lg:w-48' />
      </a>
      <div className='flex flex-row items-center mt-1'>
        <StarRatingComponent
          name='ratingA'
          editing={false}
          value={apple}
          renderStarIcon={() => (
            <FontAwesomeIcon icon={faStar} fixedWidth color='#ffb400' />
          )}
          renderStarIconHalf={() => (
            <FontAwesomeIcon icon={faStarHalf} fixedWidth color='#ffb400' />
          )}
        />
        <span className='ml-1 font-bold'>{apple.toString().slice(0,3)}</span>
      </div>
      <a
        href='https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot'
        target='_blank'
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

export const getStaticProps = async () => {
  const apple = await axios.get<{
    ratings: {
      country: string
      all_ratings: { average: number; rating_count: number }
    }[]
  }>('https://api.appannie.com/v1.3/apps/ios/app/1549772269/ratings', {
    headers: {
      Authorization: `Bearer ${process.env.APPANNIE_API_KEY}`
    }
  })
  const appleRating = { total: 0, count: 0 }
  for (const rating of apple.data.ratings) {
    appleRating.total +=
      rating.all_ratings.average * rating.all_ratings.rating_count
    appleRating.count += rating.all_ratings.rating_count
  }

  return {
    props: { apple: appleRating.total / appleRating.count },
    revalidate: 60 * 60 * 24 * 7
  }
}

export default Index
