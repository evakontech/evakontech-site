import './App.css';
import Home from './components/home/home.component';

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
