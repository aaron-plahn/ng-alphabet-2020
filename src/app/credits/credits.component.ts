import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  private contributors = [{
    "name": "Bella Alphonse",
    "title": "Language Advisor",
    "contribution": "Compiled word list and photos with assistance from Aaron. Voice, spelling, and editing."
  },
  {
    "name": "Aaron Plahn",
    "title": "Full Stack Developer",
    "contribution": "Technical design, business logic, server \ services, testing, and deployment. Audio processing and assistance with compiling word list."
  },
  {
    "name": "Justin Bambrick",
    "title": "Front End Developer",
    "contribution": "UI \ UX, visual design, and styling."
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
