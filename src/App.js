import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavIndex';
import Home from './Pages/Home';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import contactUs from './Pages/ContactUs';
import Careers from './Pages/Careers';
import Footer from './Footer/FooterIndex';

function App() {
  return (
    <Router>  
      <NavBar/>
      <Routes>
        <Route path= '/' exact Component={Home}/>
        {/* <Route path= '/services' exact Component={Services}/>
        <Route path= '/aboutUs' exact Component={AboutUs}/>
        <Route path= '/contactUs' exact Component={contactUs}/>
        <Route path= '/careers' exact Component={Careers}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
