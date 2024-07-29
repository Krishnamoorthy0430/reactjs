import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Add from './Components/add';

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Login Page</h1>
        <p>Check your Name and Login</p> 
      </div><br/>
        <div className='row'>
          <div className="col-sm-4">
            <h3>Enter numbers to Add</h3><br/>
            <Add/>
          </div>
          <div className="col-sm-4">
            <h3>Fill You Details Here</h3><br/>
            <Login/>
          </div>
        </div>
    </div>
  );
}

export default App;
