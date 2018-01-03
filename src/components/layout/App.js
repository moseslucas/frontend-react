import React, {PropTypes} from 'react'
/* import additional components such as 
Header, Footer, Sidebar, related component for the app layout */

const App = props => {
  return <div>
    {props.children}
  </div>
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
