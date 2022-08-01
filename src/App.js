import Nav from "./Components/Nav"
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Colors from './Pages/Colors'
import Users from './Pages/Users'
import Settings from './Pages/Settings'
import "./App.css"

function App() {
  return (
    <div >
      <Router>
        <Nav />
        <Sidebar />
        <div className='screens-section-container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Colors" element={<Colors />} />
            <Route exact path="/Users" element={<Users />} />
            <Route exact path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
