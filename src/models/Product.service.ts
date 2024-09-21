import ProductModel from "../schema/Pruduct.model";

class ProductService {
   private readonly productModel
   
   constructor () {
    this.productModel =  ProductModel;
   }
}

export default ProductService;    