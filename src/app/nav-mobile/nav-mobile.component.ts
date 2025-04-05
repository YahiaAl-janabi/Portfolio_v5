import { Component, inject } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import {
  menuAnimation,
  bar1Animation,
  bar2Animation,
  navBackgroundAnimation,
  logoColorAnimation,
  clipLogoAnimation,
} from "../../animations";
@Component({
  selector: "app-nav-mobile",
  standalone: true,
  imports: [],
  templateUrl: "./nav-mobile.component.html",
  styleUrl: "./nav-mobile.component.scss",
  animations: [
    menuAnimation,
    bar1Animation,
    bar2Animation,
    navBackgroundAnimation,
    logoColorAnimation,
    clipLogoAnimation,
  ],
})
export class NavMobileComponent {
  menuOpen = false;
  isMobile: boolean;

  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.isMobile = this.breakpointObserver.isMatched("(max-width: 768px)");
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((result) => {
        this.isMobile = result.matches;
        console.log("Mobile view", this.isMobile);
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
