import './App.css';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  
  <hr/>
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>
    </div>
    <br/>
  </div>
  <div className="row">
    <div className="col-sm-2">
    </div>
    <div className="col-sm-8">
    <Signup/>
    </div>
    <div className="col-sm-2">
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
