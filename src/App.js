
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Contact from './Views/Contact';
import Home from './Views/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className='p-3'>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </Router>
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
