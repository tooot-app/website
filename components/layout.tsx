import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { ExternalLink } from 'react-feather'
import Logo from './logo'

export interface Props {
  title: string
  description: string
}

const Layout: React.FC<Props & React.PropsWithChildren> = ({ children, title, description }) => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex flex-col justify-between px-4 py-8'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <script
          src='https://betteruptime.com/widgets/announcement.js'
          data-id='124304'
          async={true}
          type='text/javascript'
        />
      </Head>
      <Link href='/' passHref>
        <Logo />
      </Link>
      <main children={children} className='my-12' />
      <footer className='flex flex-col lg:flex-row justify-between'>
        <a href='https://github.com/tooot-app' target='_blank' className='text-sm'>
          Source code <ExternalLink size='1rem' className='inline-block align-text-top' />
        </a>

        <div className='text-sm'>
          © 2022 tooot by{' '}
          <a href='https://xmflsct.com' target='_blank'>
            xmflsct <ExternalLink size='1rem' className='inline-block align-text-top' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
