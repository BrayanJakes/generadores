import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() tag = 1;
  @Output() tag2: EventEmitter<Number> = new EventEmitter()
  

  img1 = false;
  img2 = false;
  img3 = false;
  img4 = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  enviarTag(tag: number){
    this.tag = tag;
    this.tag2.emit(tag)
  }

}
