import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='h-screen'>
        <Head>
          <meta name='apple-itunes-app' content='app-id=1549772269' />
        </Head>
        <body className='bg-backgroundLight text-primaryLight'>
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
