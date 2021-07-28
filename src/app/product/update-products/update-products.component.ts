import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  product_id:number;
  product:Products = new Products(); 
  constructor(private productService: ProductService,
              private route : ActivatedRoute ,
              private router : Router) { }

  ngOnInit() {
    this.product_id = this.route.snapshot.params['product_id'];
    this.productService.getProductsById(this.product_id).subscribe(data=>{
      this.product = data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.productService.updateProducts(this.product_id , this.product).subscribe(data=>{
      this.goToProductList();
    },error=> console.log(error));
    
  }

  goToProductList(){
    this.router.navigate(['/products'])
  } 
}

