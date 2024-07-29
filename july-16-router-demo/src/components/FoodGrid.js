import { useEffect, useState } from "react";
import FoodService from "../service/FoodService";
import FoodForm from "./FoodForm";

const FoodGrid=()=>
{
    const [foods, setFoods]=useState([]);
    useEffect(()=>{
        FoodService.getAllFoods()
        .then((response)=>{
            setFoods(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);
    const deleteFood = (id) => {
        // Make API call to delete the food item with the given id
        FoodService.deleteFood(id)
            .then(() => {
                // Update state to remove the deleted item from the list
                setFoods(foods.filter(food => food.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const updateFood = (id) => {
        // Make API call to delete the food item with the given id
        FoodService.updateFood(id)
            .then(() => {
                // Update state to remove the deleted item from the list
                setFoods(foods.filter(food => food.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return <div>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>                   
                </tr>
            </thead>
            <tbody>
                {
                    foods.map((f)=><tr>
                        <td>{f.id}</td>
                        <td>{f.name}</td>
                        <td>{f.price}</td>
                        <td>{f.category}</td>
                        <td>
                            <input
                                    type="button"
                                    value={"Delete"}
                                    onClick={() => deleteFood(f.id)} // Pass food id to deleteFood function
                                />
                                <label gap="10px"></label>
                            <input
                                    type="button"
                                    value={"Update"}
                                    onClick={() => updateFood(f.id)} // Pass food id to deleteFood function
                                />
                        </td>
                        
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}
export default FoodGrid;