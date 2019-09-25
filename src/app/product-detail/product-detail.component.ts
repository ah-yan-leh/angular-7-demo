import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisService } from '../services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
products:any;
  constructor(
    private http: HttpClient,
    private productService: ApisService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {    
    const params = this.activatedRoute.snapshot.params
    if (params.id !== undefined) {
      this.productService.getProductItem(params.id)
        .subscribe(data => (this.products = data));
    }
  }

}
