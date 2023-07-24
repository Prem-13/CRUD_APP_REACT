import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'
import Create from './components/Create'


const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route  path='/create' element={<Create />} />
           <Route  path='/read/:id' element={<Read />} />
           <Route  path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App