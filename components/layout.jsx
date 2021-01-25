import Footer from './footer'
import Header from './header'

export default function Layout ({ children }) {
  return (
    <div className='fixed w-screen h-screen p-4 lg:p-8 flex flex-col justify-between'>
      <Header />
      <main className='relative flex h-5/6 justify-center'>{children}</main>
      <Footer />
    </div>
  )
}
