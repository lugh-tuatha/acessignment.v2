import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Button from './components/button'

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Button>Learn more</Button>
    </div>
  )
}

export default App
