import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Mathematics from './Components/add';
import ProductGrid from './Components/ProductGrid';

function App() {
  return (
    <div className="App">
<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
<div className="container mt-5">
<div class="row">
  <div class="container mt-5">
    <ProductGrid/>
  </div>
</div>

</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>

    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <Login/>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <Mathematics/>
      </div>
  </div>
</div>
    </div>
  );
}

export default App;
