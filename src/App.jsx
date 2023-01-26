import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MovieList from './pages/MovieList'

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/movie' element={<MovieList/>} />
   </Routes>
  )
}

export default App
