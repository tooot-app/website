import Link from 'next/link'
import React from 'react'
import Logo from './logo'

const Header = () => {
  return (
    <Link href='/' passHref>
      <a href='/'>
        <Logo />
      </a>
    </Link>
  )
}

export default Header
