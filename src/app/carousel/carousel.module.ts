import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.directive';
import { CarouselItemComponent } from './carousel.item.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, CarouselItemComponent]
})
export class CarouselModule {}
