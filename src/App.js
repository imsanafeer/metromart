import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discover from './components/Discover';
import Departments from './components/Departments';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Discover/>
      <Departments/>
      <Footer/>
    </div>
  );
}

export default App;
