import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavMobileComponent } from "./nav-mobile/nav-mobile.component";
import { NavDesktopComponent } from "./nav-desktop/nav-desktop.component";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavMobileComponent, NavDesktopComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Portfolio_v5";
  isMobile: boolean;

  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.isMobile = this.breakpointObserver.isMatched("(max-width: 992px)");
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(["(max-width: 992px)"])
      .subscribe((result) => {
        this.isMobile = result.matches;
        console.log("Mobile view", this.isMobile);
      });
  }
}
