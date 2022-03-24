import { Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tag = 1;

  constructor(public homeService: HomeService){}

  taged(e: any){
    console.log(e)
    this.tag = e;
  }

  ver(tag: number){
    this.tag = tag
  }
}
