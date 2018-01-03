import React from 'react'
import { Link } from 'react-router'

const Foo = _ => {
  return <div>
    <h1> Foo </h1>
    Click <Link to='/bar'> this link</Link> to go to bar page
  </div>
}

export default Foo
