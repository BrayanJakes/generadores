import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generadores';

  tag = 1;

  taged(e: any){
    this.tag = e;
  }
}
