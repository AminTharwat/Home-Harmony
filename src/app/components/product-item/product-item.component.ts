import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/shared/models/cart';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


  @Input() product: ProductItem = {};
  carts: ProductItem[] = [];
  constructor( public dataService:DataService) { }

  ngOnInit() {
  }

}
