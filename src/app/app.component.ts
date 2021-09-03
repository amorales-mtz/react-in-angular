import { Component, OnInit } from '@angular/core';

import { parse } from 'node-html-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'react-in-angular';

  counter = 10;


  /**
   * Initialization.
   * Performs complex initializations and fetch initial data.
   */
  ngOnInit(): void {
    // Get the entire Dash HTML web page
    (async () => {
      const response = await fetch('./dash_app_standalone.html');
      const text = await response.text();
      // Convert the string into HTML
      const dashHTML = parse(text);
      // Get the HTML element
      const element = dashHTML.querySelector('#react-entry-point').innerHTML;
      const nextElement = dashHTML.querySelector('#react-entry-point').nextElementSibling.innerHTML;
      console.log(element);
    })();
  }

  handleOnClick(stateCounter: number) {
    this.counter++;
  }

}
