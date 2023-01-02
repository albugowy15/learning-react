
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Contact from './Views/Contact';
import Home from './Views/Home';
import Product from './Views/Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />

        <div className='p-3'>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
