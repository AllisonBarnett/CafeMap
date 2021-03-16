import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cafe-map';
  lat =38.6270;
  lng = -90.1994;

 initMap(): void {
    new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        mapId: "2b3be1a732157324",
        center: { lat: 48.85, lng: 2.35 },
        zoom: 12,
      } as google.maps.MapOptions
    );
  }
}

