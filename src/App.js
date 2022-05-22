import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        {/* <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/post/:year/:month' element={<Posts/>}/>
        {/* redirect a page */}
        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path='*' element={<Navigate to={'/'} replace/>}/> */}

      </Routes>

      <Footer/>

    
    
    </>
  );
}

export default App;
