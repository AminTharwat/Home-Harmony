import { Component, OnInit, Input } from '@angular/core';
import {   ProductItem } from 'src/app/shared/models/cart';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  carts: ProductItem[] = [];
  constructor(public dataservice:DataService) { }
addToCart(item:ProductItem){
this.dataservice.addToCart(item);
console.log(this.addToCart)
}


ngOnInit() {
  this.carts = this.dataservice.carts;
}

}
