import { ExternalLink } from 'react-feather'

export default function Footer () {
  return (
    <footer className='flex flex-col lg:flex-row justify-between'>
      <a
        href='https://github.com/tooot-app'
        target='_blank'
        className='text-sm'
      >
        Source code{' '}
        <ExternalLink size='1rem' className='inline-block align-text-top' />
      </a>

      <div className='text-sm'>
        © 2022 tooot by{' '}
        <a href='https://xmflsct.com' target='_blank'>
          xmflsct{' '}
          <ExternalLink size='1rem' className='inline-block align-text-top' />
        </a>
      </div>
    </footer>
  )
}
