import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavMobileComponent } from "./nav-mobile/nav-mobile.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavMobileComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Portfolio_v5";
}
