import { Component } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styles: [` 
    li p {
      cursor: pointer
    }
    i.icon {
      font-size: 1.5rem;
    }
  `]
})
export class CreateProjectComponent {

  model!: NgbDateStruct;
  selectedPage: number = 2;

  constructor() { }

  goTo(page: number) {
    this.selectedPage = page;
    console.log(this.selectedPage);
    
  }
}
