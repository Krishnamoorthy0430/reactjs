import logo from './logo.svg';
import './App.css';
import Name from './Components/name';
import Department from './Components/Department';
import College from './Components/College';
import Login from './Components/login';
import Loginmap from './Components/loginmap';
import Welcome from './Components/welcome';

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>University Login Page</h1>
        <p>Check your Name and Login</p> 
      </div>
      <div align="center">
        <Welcome backgroundColor="yellow" font color="#964C06" textAlign = "center" width = "370px" border="thick solid #33F6FF" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h3>Name</h3><br></br>
            <Name/>
          </div>
          <div className="col-sm-4">
            <h3>Department</h3><br></br>
            <Department/>
          </div>
          <div className="col-sm-4">
            <h3>College</h3><br></br> 
            <College/>     
          </div>
          <div className="col-sm-4"></div>
          {/* <div className="col-sm-4">
          <button type="submit" value="Login" className="btn btn-primary" onClick={<Loginmap></Loginmap>}>Log in</button>
          </div> */}
          <div className="col-sm-4" align="center">
            <h3>Login</h3><br></br> 
            <Login/>
            <br></br>
            <br></br>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
