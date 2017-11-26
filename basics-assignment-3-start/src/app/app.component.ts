import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideText = true;
  clickLogs = [];

  onClick() {
    if (this.hideText) {
      this.hideText = false;
    }

    this.clickLogs.push(Date.now());
  }

  getColor() {
    if (this.clickLogs.length >= 5) {
      return 'blue';
    }

    return 'white';
  }
}
