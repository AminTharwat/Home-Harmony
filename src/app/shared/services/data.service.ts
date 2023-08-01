 import { Injectable } from '@angular/core';
import { CartItem, ProductItem } from '../models/cart';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  carts: ProductItem[] = [
    {
      id: 1,
      title: 'Chair',
      img: 'assets/product2.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$35.50',
      delPrice: '$50.00',
    },
    {
      id: 2,
      title: 'Chair',
      img: 'assets/product3.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$18.75',
      delPrice: '$30.00',
    },
    {
      id: 3,
      title: 'Chair',
      img: 'assets/product4.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$40.72',
      delPrice: '$45.00',
    },
    {
      id: 4,
      title: 'Chair',
      img: 'assets/product5.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$25.25',
      delPrice: '$35.00',
    },
    {
      id: 5,
      title: 'Chair',
      img: 'assets/product6.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$40.00',
      delPrice: '$42.00',
    },
    {
      id: 6,
      title: 'Chair',
      img: 'assets/product7.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$24.50',
      delPrice: '$45.00',
    },
    {
      id: 7,
      title: 'Chair',
      img: 'assets/product8.jpg',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$15.99',
      delPrice: '$20.00',
    },
  ];

  cartList: CartItem[] = [];
  constructor(private toastr: ToastrService) {}



addToCart(item:CartItem){
  let CartItem= this.cartList.find(a=> a.id == item.id)

  if(!CartItem){
    this.cartList.push(item);
    item.cartCount = 1;
  }else{
    if(!!item.cartCount){
item.cartCount++;

    }else{
      item.cartCount = 1
    }
  }
      // Testing
      console.table(this.cartList);
      this.toastr.success('Added Successfully to cart');

}


  minusItemFromCart(item: CartItem) {
    if (!!item?.cartCount && item.cartCount > 1) {
      item.cartCount--;
    }

    else {
      item.cartCount = 0;

      this.cartList = this.cartList.filter(a=> a.id != item.id);

      this.toastr.error('Removed item from cart')
    }
    console.table(this.cartList)
  }

  getCartCount() {
    return this.cartList;
  }

  getTotalCartItems() {
    return this.cartList.length;
  }
}
