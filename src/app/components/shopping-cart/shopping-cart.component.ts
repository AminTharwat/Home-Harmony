import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/shared/models/cart';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() product: ProductItem = {};
  carts: ProductItem[] = [];

  constructor(public dataService:DataService) {    this.carts = this.dataService.carts;
  }

  ngOnInit() {
   }

}
