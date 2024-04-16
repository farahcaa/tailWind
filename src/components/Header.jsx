import {brainwave} from '../assets'
import React from 'react'

const Header = () => {
  return (
    <div className="fized top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
        <a><img src={brainwave} /></a>
        Header
    </div>
  )
}

export default Header