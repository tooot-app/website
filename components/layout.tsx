import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header'

export interface Props {
  title: string
  description: string
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex flex-col justify-between px-4 py-8'>
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
      <Header />
      <main children={children} className='my-12' />
      <Footer />
    </div>
  )
}

export default Layout
