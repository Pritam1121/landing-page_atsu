import { useState } from 'react'
import './App.css'
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from "./layout/Layout.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <nav>
          {/* <Link to="/">Home</Link> */}
        </nav>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
