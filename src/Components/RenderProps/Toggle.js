import React, { useState } from "react"
import styleHOC from "../HOCS/styleHOC"

const Toggle = (props) => {
  const [on, setOn] = useState(false)
  return (
    <div style={props.style}>
      {on && props.children}
      <button style={props.style} onClick={() => setOn(!on)}>
        {on ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default styleHOC(Toggle)
