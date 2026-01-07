import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar elladukum mela common ah irukkum */}
        <Navbar />
        
        <Routes>
          {/* Inga dhan pages vara pogudhu */}
          <Route path="/" element={<h1>Home Page (Products varum)</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;