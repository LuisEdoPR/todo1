import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my application';
  author = 'LuisEdoPR';
  count = 0;
  imgSource = './../favicon.ico';
  isDisabled = true;

}
