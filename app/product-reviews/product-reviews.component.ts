import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  product:string
  constructor(public url: ActivatedRoute) {
    this.product = this.url.snapshot.paramMap.get('product');
   }

  ngOnInit() {
  }

}
