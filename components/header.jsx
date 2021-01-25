import Link from 'next/link'
import { ExternalLink } from 'react-feather'
import Logo from './header/logo'

export default function Header () {
  return (
    <header className='flex flex-col lg:flex-row items-center lg:justify-between'>
      <Logo />
      <div className='mt-2 lg:mt-0'>
        <Link href='/privacy-policy'>Privacy policy</Link>
        <a href='https://github.com/tooot-app' target='_blank' className='ml-8'>
          Source code{' '}
          <ExternalLink size='1rem' className='inline-block align-text-top' />
        </a>
      </div>
    </header>
  )
}
