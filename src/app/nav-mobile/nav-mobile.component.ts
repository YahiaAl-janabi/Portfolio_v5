import { Component } from "@angular/core";
import {
  menuAnimation,
  bar1Animation,
  bar2Animation,
  navBackgroundAnimation,
  logoColorAnimation,
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
  ],
})
export class NavMobileComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
