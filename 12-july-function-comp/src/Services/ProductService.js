import axios from "axios";

class ProductService
{
    URL = 'http://localhost:4000/products'

    fnAllProducts()
    {
        return axios.get(this.URL);
    }

    fnAddProduct(product)
    {
        return axios.post(this.URL, product)
    }

    fnUpdateProduct(product)
    {
        return axios.put(this.URL+"/"+product.id, product)
    }

    fnDeleteProduct(product)
    {
        return axios.delete(this.URL+"/"+product.id)
    }
}
export default new ProductService();