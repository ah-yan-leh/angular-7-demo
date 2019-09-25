import { Component, OnInit } from '@angular/core';
import { ApisService } from "../services/apis.service"
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories:any;

  constructor(
    
    private http: HttpClient,
    private productService: ApisService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getProductCategories()
    .subscribe(
      res => {
        this.categories = res;
      },
      err => console.error(err)
    );
    }
}
