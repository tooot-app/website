import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html className='h-screen'>
        <Head />
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-backgroundLight dark:bg-backgroundDark text-primaryLight dark:text-primaryDark h-200vh overscroll-none'>
          <script src='noflash.js' />
          <a
            rel='me'
            href='https://social.xmflsct.com/@tooot'
            className='hidden'
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
