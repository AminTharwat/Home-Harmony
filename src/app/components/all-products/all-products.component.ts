import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/shared/models/cart';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  carts: ProductItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.carts = this.dataService.carts;
  }

}
