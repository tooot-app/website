import Link from 'next/link'
import Logo from './header/logo'

export default function Header ({ className }) {
  return (
    <header className={`${className}`}>
      <div className='w-full'>
        <Link href='/' passHref>
          <a href='/'>
            <Logo className='w-24 lg:w-48' />
          </a>
        </Link>
        <div className='mt-4 lg:w-48 lg:text-center'>
          an open-source mobile app for Mastodon
        </div>
      </div>
      <a
        href='https://apps.apple.com/app/google/id284815942'
        target='_blank'
        className='w-1/2 pr-3 my-8 lg:my-0 flex align-middle'
      >
        <img src={`/store/apple/dark.svg`} className='w-full lg:w-48 lg:my-8' />
      </a>
      <a
        href='https://play.google.com/store/apps/details?id=com.apple.android.music'
        target='_blank'
        className='w-1/2 my-8 lg:my-0 flex align-middle'
      >
        <img src={`/store/google/dark.svg`} className='w-full lg:w-48' />
      </a>
    </header>
  )
}
