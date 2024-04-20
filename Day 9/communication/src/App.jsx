import { useState } from 'react'
import ChildApp from './childApp'

function App() {
  const [power, setPower] = useState(10)
  const [version, setVersion]  = useState(20)

  return (
    <>
      Power : {power}
      Version : {version}
      <ChildApp power = { power } version = { version } setPower = { setPower } />
    </>
  )
}

export default App
