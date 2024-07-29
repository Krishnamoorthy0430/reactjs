import { useEffect, useState } from "react"
import facilityService from "../../services/FacilityService";

const FacilityGrid = () => {
    const [facilities, setFacilities]=useState([]);

    useEffect(()=>{
        facilityService.getAllFacilities()
        .then((response)=>{
            setFacilities(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    return <div>
        <table className="facility-grid" align="center" style={{ border: '5px solid #292a2d' }}>
            <thead>
                <tr>
                <th style={{ textAlign: 'left' }}>Id</th>
                <th style={{ textAlign: 'left' }}>Name</th>
                <th style={{ textAlign: 'left' }}>Description</th>
                <th style={{ textAlign: 'left' }}>Pictures</th>                 
                </tr>
            </thead>
            <tbody>
                {
                    facilities.map((f)=><tr>
                        <td style={{ textAlign: 'left' }}>{f.id}</td>
                        <td style={{ textAlign: 'left' }}>{f.name}</td>
                        <td style={{ textAlign: 'left' }}>{f.description}</td>
                        <td style={{ textAlign: 'left' }}>{f.picture}</td>                        
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}
export default FacilityGrid;