import './App.css';
import FacilityForm from './components/Facility/FacilityForm';
import FacilityGrid from './components/Facility/FacilityGrid';
function App() {
  return (
    <div className="container mt-5">
      <div class="col-sm-4">
    </div>
    <div class="row">
      <div class="col-sm-4">
        <h1>Welcome Home</h1>
        <FacilityForm/>
      </div>
      <div class="col-sm-4">
        <h2>List of Facilities</h2>
        <FacilityGrid/>
      </div>      
    </div>
    </div>
  );
}

export default App;
