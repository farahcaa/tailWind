import React from 'react'

const Section = ({className, id, crosses, crossesOffset, customPaddings, children}) => {
  return (
    <div className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${}` } `}>Section</div>
  )
}

export default Section