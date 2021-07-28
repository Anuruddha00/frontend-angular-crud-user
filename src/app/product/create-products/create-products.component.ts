import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Products } from '../products';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

product :  Products = new Products();
constructor(private productService : ProductService,
            private router : Router  ) { }

ngOnInit() {
}

saveData(){
  this.productService.createProducts(this.product).subscribe(data=>{
    this.goToProductList()
  
  },
  error=>console.log(error))
}

goToProductList(){
  this.router.navigate(['/products'])
}

onSubmit(){
  this.saveData();
  console.log(this.product)
}

}