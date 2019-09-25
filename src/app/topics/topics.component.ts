import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics:any;
  constructor(
    
    private http: HttpClient,
    private apiService: ApisService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getTopics()
    .subscribe(
      res => {
        this.topics = res;
      },
      err => console.error(err)
    );
    }
  }
