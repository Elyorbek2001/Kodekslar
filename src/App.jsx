import { useState } from 'react'

import './App.css'
import Header from './companents/Header/Header'
import Nav from './companents/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
    </>
  )
}

export default App
