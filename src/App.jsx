import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Button>Learn more</Button>
    </div>
  )
}

export default App
