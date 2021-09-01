import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'react-in-angular';

  counter = 666;

  handleOnClick(stateCounter: number) {
    this.counter++;
  }

}
