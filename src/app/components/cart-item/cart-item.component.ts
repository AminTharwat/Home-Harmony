import { Component, OnInit, Input } from '@angular/core';
import {   ProductItem } from 'src/app/shared/models/cart';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: ProductItem = {};

  constructor(public dataservice:DataService) { }

  ngOnInit() {
  }

}
