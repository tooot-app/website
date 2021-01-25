import { useMemo } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import IndexLarge from '../components/index/large'
import IndexSmall from '../components/index/small'
import useMediaQuery from '../utils/mediaQuery'

const layoutDefault = 'fixed h-screen w-screen flex flex-col'
const layoutSmall = 'p-6'
const layoutLarge = 'lg:p-8 lg:flex-wrap'

const headerDefault = 'flex'
const headerSmall = 'flex-row flex-wrap oreder-1'
const headerLarge =
  'lg:flex-col lg:order-2 lg:justify-end lg:w-1/3 lg:h-1/2 lg:pb-16'

const mainDefault = 'relative self-center'
const mainSmall = 'order-3'
const mainLarge = 'lg:flex lg:h-full lg:justify-center lg:w-2/3 lg:order-1'

const footerDefault = 'flex flex-col'
const footerSmall = 'order-2 mb-8'
const footerLarge =
  'lg:order-3 lg:justify-start lg:w-1/3 lg:h-1/2 lg:pt-16 lg:mb-0'

export default function Index () {
  const breakpointLarge = useMediaQuery('(min-width: 1024px)')

  const children = useMemo(() => (breakpointLarge ? <IndexLarge /> : null), [
    breakpointLarge
  ])

  return (
    <div className='h-200vh'>
      <div className={`${layoutDefault} ${layoutSmall} ${layoutLarge}`}>
        <Header className={`${headerDefault} ${headerSmall} ${headerLarge}`} />
        <main
          className={`${mainDefault} ${mainSmall} ${mainLarge}`}
          children={children}
        />
        <Footer className={`${footerDefault} ${footerSmall} ${footerLarge}`} />
      </div>
    </div>
  )
}
