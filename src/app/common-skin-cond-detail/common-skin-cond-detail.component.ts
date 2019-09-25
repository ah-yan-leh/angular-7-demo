import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from '../services/apis.service';
import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-common-skin-cond-detail',
  templateUrl: './common-skin-cond-detail.component.html',
  styleUrls: ['./common-skin-cond-detail.component.css']
})
export class CommonSkinCondDetailComponent implements OnInit {
topic:object;
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private apiService: ApisService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params
    if (params.id !== undefined) {
      this.apiService.getCommonTopicsById(params.id)
        .subscribe(data => (this.topic = data, console.log('this.topic',this.topic)));
    }
  }
  }
  

