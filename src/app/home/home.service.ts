import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  responsiveStatus = 2;

  constructor(private breakpointObserver: BreakpointObserver) {

    setTimeout(() => {
      this.responsive()
    }, 100);
   }

  responsive() {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.XLarge,
        Breakpoints.Small,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.Medium]) {
          this.responsiveStatus = 1;
          console.log("medium");
        }
        if (result.breakpoints[Breakpoints.Large]) {
          console.log("grande");
          this.responsiveStatus = 2;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          console.log("muy grande");
          this.responsiveStatus = 3;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          console.log("muy peque;o");
          this.responsiveStatus = 4;
        }
      });
  }
}
