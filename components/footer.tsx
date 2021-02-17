import Link from 'next/link'
import { ExternalLink } from 'react-feather'

export default function Footer () {
  return (
    <footer className='flex flex-col lg:flex-row justify-between'>
      <a
        href='https://github.com/tooot-app'
        target='_blank'
        className='order-1 text-sm'
      >
        Source code{' '}
        <ExternalLink size='1rem' className='inline-block align-text-top' />
      </a>

      <div className='order-3 lg:order-2 text-sm'>
        © 2021 tooot by{' '}
        <a href='https://xmflsct.com' target='_blank'>
          xmflsct{' '}
          <ExternalLink size='1rem' className='inline-block align-text-top' />
        </a>
      </div>

      <div className='order-2 lg:order-3 my-2 lg:my-0 text-sm'>
        <Link href='/end-user-license-agreement'>EULA</Link>
      </div>
    </footer>
  )
}
