import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-components-services';
  mainTitle = 'hello world';


  clickButton(text: string) {
    console.log(`Text from outher component: ${text}`);
  }

} 
