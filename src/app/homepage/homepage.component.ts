import { Component, OnInit } from '@angular/core';
import { faCoffee,faCalendar,faHeart, faBolt  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  faCoffee = faCoffee;
  faCalendar = faCalendar;
  faHeart = faHeart;
  faBolt = faBolt;

  ngOnInit() {
  }

}
