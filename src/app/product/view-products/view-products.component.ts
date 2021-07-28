import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  product_id:number;
  product: Products;
  constructor(private route:ActivatedRoute ,private productService : ProductService ) { }

  ngOnInit() {
    this.product_id = this.route.snapshot.params['product_id'];

    this.product = new Products()
    this.productService.getProductsById(this.product_id).subscribe(data=>{
      this.product = data;
    })
  }


}

