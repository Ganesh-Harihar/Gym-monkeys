import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-gym-classes',
  templateUrl: './nav-gym-classes.component.html',
  styleUrls: ['./nav-gym-classes.component.scss']
})
export class NavGymClassesComponent implements OnInit {

  days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


  constructor() { }

  ngOnInit() {
  }

}
