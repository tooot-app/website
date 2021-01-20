import Head from 'next/head'
import Logo from '../components/logo'

export default function Home () {
  return (
    <div className='bg-backgroundLight dark:bg-backgroundDark text-primaryLight dark:text-primaryDark min-h-screen p-8 flex-1 justify-center align-middle'>
      <Logo />
      <a rel='me' href='https://social.xmflsct.com/@tooot' className='hidden' />
    </div>
  )
}
