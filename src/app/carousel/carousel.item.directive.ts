import { Component, ViewEncapsulation } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'slide',
  template: '<div class="carousel-item" [ngStyle]="style()"><ng-content></ng-content></div>',
  styleUrls: ['./carousel.item.directive.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselItemComponent {
  animation = `fromactivetoright 0s linear forwards`;
  style = () => {
    return {
      animation: this.animation
    };
  }
}
