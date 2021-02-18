import React from 'react'
import authHOC from './authHOC'
import styleHOC from './styleHOC'

const Square = props => {
  return (
    <div {...props} style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default styleHOC(authHOC(Square))
