import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StlCoffeeComponent } from './stl-coffee/stl-coffee.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'stlcoffee', component: StlCoffeeComponent},
  {path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
