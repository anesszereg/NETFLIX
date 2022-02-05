import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Face from './component/face/Face'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Face/>
      
    </div>
  )
}

export default App
