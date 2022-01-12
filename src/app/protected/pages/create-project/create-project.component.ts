import { Component } from '@angular/core';

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

  selectedPage: number = 1;

  constructor() { }

  goTo(page: number) {
    this.selectedPage = page;
    console.log(this.selectedPage);
    
  }
}
