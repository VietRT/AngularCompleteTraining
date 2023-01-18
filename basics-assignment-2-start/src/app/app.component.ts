import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName = "";
  enableButton = false;

  ngOnInit(): void {

  }

  //onUpdateUserName(event: any) {
  //  if (this.userName !== "") {
  //    this.enableButton = true;
  //  }
  //  else {
  //    this.enableButton = false;
  //  }
  //}

  resetUserName(event: any) {
    this.userName = "";
    this.enableButton = false;
  }

}
