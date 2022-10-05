import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Link(props) {
  console.log(props)
  const changePath = () => {
    const nextURL = props.to
    const nextTitle = 'My new page title'
    const nextState = { additionalInformation: 'Updated the URL with JS' };
   // window.location.pathname = props.to;
    window.history.pushState(nextState, nextTitle, nextURL)
    props.pathChanged(props.to)
  }
  return <button onClick={changePath}>{props.children}</button>
}

function App() {
  const [count, setCount] = useState(0)
  const [currentPath, setCurrentPath ] = useState(0)

  const router = () => {
    switch(currentPath) { //(window.location.pathname)
      case "/":
        return "HOMEPAGE"
      case "/about":
        return "ABOUT"
      default:
    }
  }
  const pathChanged = (newPath) => {
    setCurrentPath(newPath)
  }
console.log(window.location)
  return (
      <div className="App">
        {router()}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <Link pathChanged={pathChanged} to='/'>homepage</Link>
        <br />

        <Link pathChanged={pathChanged} to='/about'>about</Link>
        <br />
        <br />
        <br />
    </div>
  )
}

export default App
