import { ExternalLink } from 'react-feather'

export default function Footer () {
  return (
    <footer className='text-center'>
      © 2021 tooot by{' '}
      <a href='https://xmflsct.com' target='_blank'>
        xmflsct{' '}
        <ExternalLink size='1rem' className='inline-block align-text-top' />
      </a>
    </footer>
  )
}
