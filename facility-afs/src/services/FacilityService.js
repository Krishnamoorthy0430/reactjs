import axios from "axios";

class FacilityService
{
    URL="http://localhost:6001/facility";

    getAllFacilities()
    {
        return axios.get(this.URL)
    }
    findFacilityById(id)
    {
        return axios.get(this.URL+"/"+id)
    }
    addFacility(facility)
    {
        return axios.post(this.URL,facility);
    }
    
    deleteFacility(id)
    {
        return axios.delete(this.URL+"/"+id)
    }
}
export default new FacilityService();