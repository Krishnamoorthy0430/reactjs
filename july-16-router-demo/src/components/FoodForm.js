import { useEffect, useRef, useState } from "react";
import FoodService from "../service/FoodService";
import Food from "./Food";

const FoodForm=()=>{
    const [id, setId]=useState();
    const [name, setName]=useState();
    const [price, setPrice]=useState();
    const [category, setCategory]=useState();

    const classname=useRef();

    useEffect(()=>{
     classname.id="form-control";
     classname.name="form-control";
     classname.price="form-control";
     classname.category="form-control";
    });

    function fnAdd()
    {
        //call the method of ProductService now
        var food={"id":"","name":"","price":""};
        food.id=id;
        food.name=name;
        food.price=price;
        food.category=category;
        // console.log("........................")
        // console.log(product);
        // alert(JSON.stringify(product))
        FoodService.addFood(food)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function fnUpdate()
    {
        var food={"id":"","name":"","price":"","category":""};
        food.id=id;
        food.name=name;
        food.price=price;
        food.category=category;
        // console.log(product)
        FoodService.updateFood(food)
        .then((response)=>{
            console.log("Response is "+response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function fnDelete()
    {        
        FoodService.deleteFood(id)
        .then((response)=>{
            console.log("Response is ")
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return<div>
        
        Id :<input type="number" id="id" className={classname.id} onChange={(event)=>{setId(event.target.value)}} />
       
        Name :<input type="text" id="name" className={classname.name} onChange={(event)=>{setName(event.target.value)}} />
        
        Price :<input type="number" id="price" className={classname.price} onChange={(event)=>{setPrice(event.target.value)}} />

        Category :<input type="text" id="category" className={classname.category} onChange={(event)=>{setCategory(event.target.value)}} />
        
        <br/>
        <input type="button" value="Add" className="btn btn-success" onClick={fnAdd} />
        <input type="button" value="Update" className="btn btn-warning" onClick={fnUpdate} />
        <input type="button" value="Delete" className="btn btn-danger" onClick={fnDelete} />
        
    </div>
}
export default FoodForm;