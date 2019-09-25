import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisService } from '../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-skin-conditions',
  templateUrl: './common-skin-conditions.component.html',
  styleUrls: ['./common-skin-conditions.component.css']
})
export class CommonSkinConditionsComponent implements OnInit {

  commontopics:any;
  constructor(
    
    private http: HttpClient,
    private apiService: ApisService,
    private router: Router) { }

  ngOnInit() {
    this.apiService.getCommonTopics()
    .subscribe(
      res => {
        this.commontopics = res;
      },
      err => console.error(err)
    );
  }

}
