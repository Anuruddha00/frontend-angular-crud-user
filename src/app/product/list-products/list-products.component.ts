import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
 
  placements = ['top', 'left', 'right', 'bottom'];
  popoverTitle = 'Are you sure?' ;
  popoverMessage = 'Are you sure to <b>delete</b> this record? This process cannot be undone. ';
  confirmText = 'Yes <i class="fas fa-check"></i>';
  cancelText = 'No <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;

  products : Products[];

  constructor( private productService : ProductService , private router : Router) {}
  ngOnInit(){
    this.getProducts();

  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data=>{
      this.products = data;
    });
  }

  private updateProducts(product_id:number){
    this.router.navigate(['updated-products',product_id]);
  }


  private deleteProducts(product_id:number){
    this.productService.deleteProducts(product_id).subscribe(data=>{
      this.getProducts();
    })


  }

  private viewProducts(product_id:number){
    this.router.navigate(['view-products',product_id])
  }
}
