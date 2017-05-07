import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lightsOn: boolean;

  public changeBackground() {
    if (this.lightsOn) {
      document.body.style.background = 'black';
      this.lightsOn = false;
    } else {
      document.body.style.background = 'white';
      this.lightsOn = true;
    }
  }

  constructor() {
    this.lightsOn = false;
  }
}
