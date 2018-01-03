import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/layout/App'
import Foo from './components/foo'
import Bar from './components/bar'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Foo} />
    <Route path="/foo" component={Foo} />
    <Route path="/bar" component={Bar} />
  </Route>
)
