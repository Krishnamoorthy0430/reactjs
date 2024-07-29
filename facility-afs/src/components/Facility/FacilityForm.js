import { useEffect, useRef, useState } from "react";
import FacilityService from "../../services/FacilityService";

const FacilityForm = () => {
    const [id, setId]=useState();
    const [name, setName]=useState();
    const [description, setDescription]=useState();
    const [picture, setPicture]=useState();

    const classname = useRef();

    useEffect(()=>{
        classname.id="form-control";
        classname.name="form-control";
        classname.description="form-control";
        classname.picture="form-control";
    });

    function fnAdd()
    {
        var facility={"id":"","name":"","description":"","picture":""};
        facility.id=id;
        facility.name=name;
        facility.description=description;
        facility.picture=picture;

        FacilityService.addFacility(facility)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function fnDelete()
    {
        FacilityService.deleteFacility(id)
        .then((response)=>{
            console.log(response.data);
            window.location.reload(false)
        })
        .catch((error)=>{            
            console.log(error);
        })
    }

    return <div>
        <h1>Facilities tab</h1>
        ID <input type="text" id="id" className={classname.id} onChange={(event)=>{setId(event.target.value)}} /><br/><br/>
        Name of Facility <input type="text" id="name" className={classname.name} onChange={(event)=>{setName(event.target.value)}} /><br/><br/>
        Description of Facility <input type="text" id="description" className={classname.description} onChange={(event)=>{setDescription(event.target.value)}} /><br/><br/>
        Pictures of Facility<input type="text" id="picture" className={classname.picture} onChange={(event)=>{setPicture(event.target.value)}} /><br/><br/>
        <div>
            <input type="button" className="btn btn-primary" value="Create" onClick={fnAdd}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" className="btn btn-primary" value="Delete" onClick={fnDelete}/><br/><br/>
        </div>
    </div>
}
export default FacilityForm;