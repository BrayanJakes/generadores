import { Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generadores';

  tag = 1;

  constructor(public homeService: HomeService){}

  taged(e: any){
    this.tag = e;
  }
}
