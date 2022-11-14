import { ItemServiceService } from './../../shared/services/item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  items: any = []

  constructor(private itemServiceService: ItemServiceService ) { }

  ngOnInit(): void {


  this.itemServiceService.getItem().subscribe((res: any) => {
    console.log(res);

    this.items = res;
  })
  }
}
