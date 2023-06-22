import { Routes, Route } from 'react-router-dom';
import { Home, About, Career, Portfolio, HireDeveloper, ApplyForm, Opening, Contact } from './pages';

const App = () => (
    <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:opening" element={<Opening />} />
            <Route path="/job-apply-form" element={<ApplyForm />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire-developer" element={<HireDeveloper />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
);

export default App;
