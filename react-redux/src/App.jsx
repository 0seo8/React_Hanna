import './App.css'
import Home from './pages'
import SingleCocktail from './pages/SingleCocktail'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cockatail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  )
}

export default App
