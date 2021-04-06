import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { StlCoffeeComponent } from './stl-coffee/stl-coffee.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { PublicReviewsComponent } from './public-reviews/public-reviews.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    StlCoffeeComponent,
    ReviewsComponent,
    HomeComponent,
    PublicReviewsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAcUSugiFf5ZW-JTnDERKVuKDUdfqbvj9Y',
  libraries: ["places"]
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
