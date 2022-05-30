import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/portfolio/" element={<Home />}></Route>
            <Route path="/portfolio/projects/" element={<Projects />}></Route>
          </Routes>
        </div>
        <Footer />
        <div className='text-3xl font-bold underline'>
          HELLO
        </div>
      </div>
    </Router>
  );
}

export default App;
