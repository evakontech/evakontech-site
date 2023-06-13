import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home.component.jsx';
import Career from './components/career/Career';
import About from './components/about/About';
import HireDeveloper from './components/hire-developer/HireDeveloper';
import Blog from './components/blog/Blog';
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire-developer" element={<HireDeveloper />} />

      </Routes>
    </>
  );
}

export default App;
