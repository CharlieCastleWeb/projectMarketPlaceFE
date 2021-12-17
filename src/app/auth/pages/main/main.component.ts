import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
    .full-height{
      height: 100vh
    } 
  `]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
