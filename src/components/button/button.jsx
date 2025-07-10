import React from 'react'
import './button.styles.scss'

const BUTTON_TYPE_CLASSES =
{
  google:'google-sign-in',
  inverted: 'inverted'
}
const Button = ({children,buttonType,...otherprops}) => {
  return (
    <div>
      <button 
      className={` ${BUTTON_TYPE_CLASSES[buttonType]} button-container`}
      {...otherprops}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
