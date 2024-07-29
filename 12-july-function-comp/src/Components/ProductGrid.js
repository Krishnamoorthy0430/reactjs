import { useEffect, useState } from "react"
import ProductService from "../Services/ProductService";

const ProductGrid=()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        ProductService.fnAddProduct()
        .then((response)=>{
            setProducts(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    return <div>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                products.map((p)=>
                    <tr>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
}
export default ProductGrid;