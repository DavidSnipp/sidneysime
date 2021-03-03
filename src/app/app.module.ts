import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { VisitComponent } from './visit/visit.component';
import { AcknowledgementsComponent } from './acknowledgements/acknowledgements.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    VisitComponent,
    AcknowledgementsComponent,
    PicturesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbNavModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
