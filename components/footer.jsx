import Link from 'next/link'
import { ExternalLink } from 'react-feather'

export default function Footer ({ className }) {
  return (
    <footer className={className}>
      <a href='https://github.com/tooot-app' target='_blank'>
        Source code{' '}
        <ExternalLink size='1rem' className='inline-block align-text-top' />
      </a>
      <div className='lg:my-4'>
        © 2021 tooot by{' '}
        <a href='https://xmflsct.com' target='_blank'>
          xmflsct{' '}
          <ExternalLink size='1rem' className='inline-block align-text-top' />
        </a>
      </div>
      <Link href='/end-user-license-agreement'>End User License Agreement</Link>
    </footer>
  )
}
