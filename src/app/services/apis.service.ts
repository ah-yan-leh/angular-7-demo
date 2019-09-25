import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../models/Category.model";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private topics = '../assets/json/topics.json';
  private commonTopics = '../assets/json/commonSkinSymps.json';

private apiUrl = 'http://127.0.0.1:3333/api/v1/productcategory-index';
private apiProductTypeUrl = 'http://127.0.0.1:3333/api/v1/ProductType-index';
private apiProductListUrl = 'http://127.0.0.1:3333/api/v1/Product-index';
private apiProductItemUrl = 'http://127.0.0.1:3333/api/v1/Product-item';

//Product-item/:id
  constructor(
    private http: HttpClient) { }
    /** GET rescue codes from the server */
    // getCategories (): Observable<Category[]> {
    //   return this.http.get<Category[]>( `${this.apiUrl}/category-index` )
    //     .pipe(
    //       tap(_ => `Tap data`)
    //     );
    // }

    getProductCategories (): Observable<Category[]> {
      return this.http.get<Category[]>(this.apiUrl)
        .pipe(
          tap(_ => `Tap data`)
        );
    }

    getProductType (id: number): Observable<Category[]> {
      return this.http.get<[]>(this.apiProductTypeUrl+'/'+id)
        .pipe(
          tap(_ => `Tap data`)
        );
    }    
    getProductList(id: number): Observable<Category[]> {
      return this.http.get<[]>(this.apiProductListUrl+'/'+id)
      .pipe(
        tap(_ => `Tap data`)
      );
  }    
  getProductItem(id: number): Observable<Category[]> {
    return this.http.get<[]>(this.apiProductItemUrl+'/'+id)
    .pipe(
      tap(_ => `Tap data`)
    );
}    
    getCommonTopicsById(id: number): Observable<any> {
      return this.getCommonTopics().pipe(
        map(data => data.find(d => d.id == id))
      );
    }

 
    getCommonTopics(): Observable<any[]> {
      return this.http.get<any[]>(this.commonTopics)
        .pipe(
          tap(_ => `Tap data`)
        );
    }

  getTopics (): Observable<any[]> {
    return this.http.get<any[]>(this.topics)
      .pipe(
        tap(_ => `Tap data`)
      );
  }
}
