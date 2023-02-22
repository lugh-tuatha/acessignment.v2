import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
