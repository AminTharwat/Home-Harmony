export class ProductItem{
  id?:number;
  title?:string;
  img?:string;
  description?:string;
  price?:string;
  delPrice?:string;
  cartCount?: number
}


export class CartItem extends ProductItem{
}
