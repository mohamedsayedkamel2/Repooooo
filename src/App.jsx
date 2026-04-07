import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <HelloWorld />
      </div>
    </Router>
  )
}

export default App