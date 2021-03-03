import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VisitComponent } from './visit/visit.component';
import { AcknowledgementsComponent } from './acknowledgements/acknowledgements.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'acknowledgements', component: AcknowledgementsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
