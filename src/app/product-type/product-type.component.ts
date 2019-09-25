import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ApisService } from "../services/apis.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  products:any;
  constructor(
    private http: HttpClient,
    private productService: ApisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }


    ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params
      if (params.id !== undefined) {
        this.productService.getProductType(params.id)
          .subscribe(data => (this.products = data, console.log('this.product-type',this.products)));
      }
    }

}
