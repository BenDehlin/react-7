import React from "react"
import "../style.css"
import Toggle from "./Toggle"
import SuperSimpleRenderProp from "./SuperSimpleRenderProp"
import Pokemon from "../Hooks/Pokemon"
import ToggleRenderProps from "./ToggleRenderProps"
import ToggleRPC from "./ToggleRPC"

const RenderProps = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <Pokemon />
      </Toggle>
      <SuperSimpleRenderProp>
        <div>
          Hello World
        </div>
      </SuperSimpleRenderProp>
      <ToggleRenderProps
        render={({ on, setOn, style }) => (
          <div style={style}>
            {on && <h1>Showing this</h1>}
            <button style={style} onClick={() => setOn(!on)}>
              Show/Hide
            </button>
          </div>
        )}
      />
      <ToggleRPC>
        {({ on, setOn, style }) => (
          <div style={style}>
            {on && <h1>Showing this</h1>}
            <button style={style} onClick={() => setOn(!on)}>
              Hide/Show
            </button>
          </div>
        )}
      </ToggleRPC>
    </section>
  )
}
export default RenderProps
