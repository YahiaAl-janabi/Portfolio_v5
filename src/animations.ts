import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

// Animation for displaying the navigation menu
export const navBackgroundAnimation = trigger("navBackgroundAnimation", [
  state("closed", style({ backgroundColor: "transparent", opacity: 1 })),
  state("open", style({ backgroundColor: "rgb(255, 255, 255)", opacity: 1 })),
  transition("closed => open", [animate("300ms ease-in-out")]),
  transition("open => closed", [animate("200ms ease-in-out")]),
]);
export const logoColorAnimation = trigger("logoColorAnimation", [
  state("closed", style({ opacity: 1 })),
  state("open", style({ filter: "invert(100%)", opacity: 1 })),
  transition("closed => open", [animate("300ms ease-in-out")]),
  transition("open => closed", [animate("200ms ease-in-out")]),
]);

export const clipLogoAnimation = trigger("clipLogoAnimation", [
  state("closed", style({ opacity: 1 })),
  state("open", style({ clipPath: "inset(0 70% 0 0)", opacity: 1 })),
  transition("closed => open", [animate("5s ease-in-out")]),
  transition("open => closed", [animate("4s ease-in-out")]),
]);

export const menuAnimation = trigger("menuAnimation", [
  state("closed", style({ opacity: 0, transform: "translateY(-1000px)" })),
  state("open", style({ opacity: 1, transform: "translateY(0)" })),
  transition("closed => open", [animate("300ms ease-in-out")]),
  transition("open => closed", [animate("200ms ease-in-out")]),
]);

// Animation for the toggle button of the navigation menu
export const bar1Animation = trigger("bar1Animation", [
  state("closed", style({ transform: "rotate(0)", opacity: 1 })),
  state(
    "open",
    style({
      transform: "rotate(45deg) translate( 5px, 0px)",
      opacity: 1,
      backgroundColor: "black",
    })
  ),
  transition("closed => open", [animate("300ms ease-in-out")]),
  transition("open => closed", [animate("200ms ease-in-out")]),
]);
export const bar2Animation = trigger("bar2Animation", [
  state("closed", style({ transform: "rotate(0)", opacity: 1 })),
  state(
    "open",
    style({
      transform: "rotate(-45deg) translate( 5px, 0px)",
      opacity: 1,
      backgroundColor: "black",
    })
  ),
  transition("closed => open", [animate("300ms ease-in-out")]),
  transition("open => closed", [animate("200ms ease-in-out")]),
]);
