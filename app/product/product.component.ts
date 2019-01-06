import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:string[]

  constructor() {
    this.products = ["Apple","Samsung","Jio","Vivo","HTC"];
  }

  ngOnInit() {
  }

}
