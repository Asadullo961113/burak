import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";


class ProductService {
   private readonly productModel
   
   constructor () {
    this.productModel =  ProductModel;
   }

   public async getAllProducts(): Promise<Product[]> {
      const result = await this.productModel.find().exec();
      console.log(result)
      return result;
    }


   public async createNewProduct(input:ProductInput) : Promise<Product> {
     try {
        return await this.productModel.create(input);
     }
     catch(err) {
        console.log("Error model:createNewProduct", err)
        throw new Errors(HttpCode.BAD_REQUEST,Message.CREATE_FAILED)
     }
   };

   public async updateChosenProduct(
      id: string,
      input: ProductUpdateInput
    ): Promise<Product> {
      id = shapeIntoMongooseObjectId(id);
      const result = await this.productModel
        .findOneAndUpdate({ _id: id }, input, { new: true })
        .exec();
      if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
      console.log("resultimiz", result);
      return result;
    }
}

export default ProductService;    