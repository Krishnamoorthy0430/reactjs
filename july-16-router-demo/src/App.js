import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Food from './components/Food';
import FoodGrid from './components/FoodGrid';
import FoodForm from './components/FoodForm';

function App() {
  return (
    <div className="App">
      <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Router Demo</h1>
  <p>This is a Router Demo</p> 
</div>
<Nav/>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Welcome</h3>
      <p>Welcome</p>
      <p>Hello</p>
    </div>
    <div class="col-sm-4">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/food' element={<FoodForm/>}></Route>
      </Routes>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
    </div>
  </div>
  <div className='row'>
    <div className='col-sm=2'></div>
    <div className='col-sm=8'>
      <Routes>
        <Route path="/food" element={<FoodGrid/>}></Route>
      </Routes>
    </div>
    <div className='col-sm=2'></div>
  </div>
</div>
    </div>
  );
}

export default App;
