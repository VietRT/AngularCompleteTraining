import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    .fifthElement {
      color: white;
    }
  `]
})
export class AppComponent implements OnInit {

  secretPassword = "Secret Pasword = tuna";
  toggleSecretPassword = true;
  loggedClickCounter = 0;
  loggedClicks = [0];

  ngOnInit(): void {
  }

  OnUpdateDisplayStatus(event: any) {
    this.toggleSecretPassword = !this.toggleSecretPassword;
    this.loggedClickCounter++;
    this.loggedClicks.push(this.loggedClickCounter);
  }

}
