import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div className='p-10 bg-base-200' id='app'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
