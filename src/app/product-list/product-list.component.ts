import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisService } from '../services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  constructor(
    private http: HttpClient,
    private productService: ApisService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {      
    const params = this.activatedRoute.snapshot.params
    if (params.id !== undefined) {
      this.productService.getProductList(params.id)
        .subscribe(data => (this.products = data, console.log('this.product-type',this.products)));
    }
  }

}
