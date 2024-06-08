import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Instruction } from './components/Instruction/Instruction';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meal/:id" element={<Instruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
