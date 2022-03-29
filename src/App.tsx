import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from './pages/Home';
import CombineNav from './components/NavBar/CombineNav';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer/Footer';
import Products from './pages/Products';
import FAQ from './pages/FAQ';


const App=():JSX.Element =>{
  return (
    <div className="App">
      <Router>  
        <CombineNav />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
