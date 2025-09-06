import logo from './logo.svg';
import './App.css';
import Routes from './routes/Routes/Routes';
import Navbar from './components/layouts/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer';

function App() {
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes />
      <Footer/>
    </BrowserRouter>
  </>
}

export default App;
