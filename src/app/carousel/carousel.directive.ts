import { Component, ContentChildren, QueryList, OnDestroy, Input, AfterContentInit } from '@angular/core';
import { CarouselItemComponent } from './carousel.item.directive';
import { Subscription, interval } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carousel',
  template: `
    <div class="carousel">
      <div class="carousel-inner">
        <ng-content></ng-content>
        <a class="carousel-control-prev" (click)="previous()" role="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" (click)="next()" role="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.directive.css']
})
export class CarouselComponent implements OnDestroy, AfterContentInit {
  currentIndex = 0;
  @Input()
  interval = 3000;
  @Input()
  speed = 2;
  @Input()
  timing = 'ease';
  sub: Subscription | undefined;
  @ContentChildren(CarouselItemComponent)
  carouselItems!: QueryList<CarouselItemComponent>;
  ngAfterContentInit(): void {
    this.carouselItems.first.animation = `fromrighttoactive 0s ${this.timing} forwards`;
    this.currentIndex = Math.max(0, Math.min(this.carouselItems.length - 1, 0));
    this.sub = interval(this.interval).subscribe(() => this.go('fromactivetoleft', true, 'fromrighttoactive'));
  }
  ngOnDestroy() {
    this.stop();
  }
  private stop = () => {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }
  private go = (start: string, inc: boolean, end: string) => {
    let item = this.carouselItems.find((_, index) => index === this.currentIndex);
    if (item) {
      item.animation = `${start} ${this.speed}s ${this.timing} forwards`;
    }
    if (inc) {
      this.currentIndex = this.currentIndex === this.carouselItems.length - 1 ? 0 : this.currentIndex + 1;
    } else {
      this.currentIndex = this.currentIndex === 0 ? this.carouselItems.length - 1 : this.currentIndex - 1;
    }
    item = this.carouselItems.find((_, index) => index === this.currentIndex);
    if (item) {
      item.animation = `${end} ${this.speed}s ${this.timing} forwards`;
    }
  }
  next = () => {
    this.stop();
    this.go('fromactivetoleft', true, 'fromrighttoactive');
  }
  previous = () => {
    this.stop();
    this.go('fromactivetoright', false, 'fromlefttoactive');
  }
}
