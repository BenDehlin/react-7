import React from 'react'
import '../style.css'
import Counter from './Counter'
import FunctionalComponent from './FunctionalComponent'
import Movies from './Movies'
import Pokemon from './Pokemon'

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      {/* <FunctionalComponent /> */}
      {/* <Counter /> */}
      {/* <Movies /> */}
      {/* <Pokemon /> */}
    </section>
  )
}
export default Hooks
