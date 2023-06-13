import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home.component.jsx';
import Career from './components/career/Career';
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route >
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
