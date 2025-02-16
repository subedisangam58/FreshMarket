import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/users/Shop';
import Cart from './components/users/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import Todayprice from './components/Todayprice';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todayprice" element={<Todayprice/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
