import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shops from './pages/Shops'
import Marketplace from './pages/Marketplace'
import Transport from './pages/Transport'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/transport" element={<Transport />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
