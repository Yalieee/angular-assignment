import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  buttonDisabled = true;

  onTypeUserName() {
    if (0 == this.userName.length) {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  onClickButton() {
    this.userName = '';
    this.buttonDisabled = true;
  }
}
