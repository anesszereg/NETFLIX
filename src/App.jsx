import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import Face from './component/pages/face/Face'
import Navbar from './component/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './component/pages/face/Face'
import Latest from './component/pages/Latest/Latest'
import MyList from './component/pages/MyList/MyList'
import Movies from './component/pages/Movies/Movies'
import TVShow from './component/pages/TVShow/TVShow'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">   
      

     <Routes>
       <Route  path='/'  element ={<Home/>}/>
       <Route  path='/Latest'  element ={<Latest/>}/>
       <Route  path='/MyList'  element ={<MyList/>}/>
       <Route  path='/Movies'  element ={<Movies/>}/>
       <Route  path='/TVShow'  element ={<TVShow/>}/>
     </Routes>
      
    

    </div>
  )
}

export default App
// import {}
