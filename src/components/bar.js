import React from 'react'
import { Link } from 'react-router'

const Bar = _ => {
  return <div>
    <h1> Bar </h1> 
    Click <Link to='/foo'> this link</Link> to go to foo page
  </div>
}

export default Bar
