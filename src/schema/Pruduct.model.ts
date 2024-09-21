import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

const productSchema = new Schema(

);

export default mongoose.model("Product", productSchema);