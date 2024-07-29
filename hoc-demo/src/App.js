import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-5 text-white bg-info'>
        <h2>Welcome to HOC demo</h2>
      </div>
      <div className='row'>
        <div className='col-sm-4'>1</div>
        <div className='col-sm-4'>
          <Login/>
        </div>
        <br/>
        <div className='col-sm-4'><Hello/></div>
      </div>
    </div>
  );
}

export default App;
