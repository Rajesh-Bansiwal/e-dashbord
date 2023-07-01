// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Private from './components/Private';
import Login from './components/Login';
import Add from './components/Add';
import Productlist from './components/Productlist';
import Update from './components/Update';
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>

        <Route element={<Private/>}>

        <Route path="/home" element={<Productlist/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/logout" element={<h2>this is logout</h2>}/>
        <Route path="/profile" element={<h1>this is profilt</h1>}/>
        </Route>

        <Route path="/sign" element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
