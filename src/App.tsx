import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import CombineNav from "./components/NavBar/CombineNav";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import Snacks from "./pages/Snacks";
import Signatures from "./pages/Signatures";
import DalleMomo from "./pages/DalleMomo";
import Momo from "./pages/Momo";
import RiceAndNoodles from "./pages/RiceAndNoodles";
import FrozenItem from "./pages/FrozenItem";
import Signature from "./pages/Signature";
import { Search } from "./pages/Search";
import Logout from "./pages/Logout";
import { AuthProvider } from "./context/authService";
import { ForgotPassword } from "./pages/ForgotPassword";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <CombineNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/search/:key" element={<Search />} />
            <Route path="/products/:uniqueNumber" element={<SingleProduct />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products/snacks" element={<Snacks />} />
            <Route path="/products/signatures" element={<Signatures />} />
            <Route path="/products/dalle-momos" element={<DalleMomo />} />
            <Route path="/products/momo-T1324I" element={<Momo />} />
            <Route path="/products/frozen-items" element={<FrozenItem />} />
            <Route path="/products/signature" element={<Signature />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/products/rice-and-noodles"
              element={<RiceAndNoodles />}
            />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
