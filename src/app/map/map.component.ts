import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  
  initMap(): void {
    // Create the map.
    const pyrmont = { lat: -33.866, lng: 151.196 };
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: pyrmont,
        zoom: 17,
        mapId: "8d193001f940fde3",
      } as google.maps.MapOptions
    );
  
    // Create the places service.
    const service = new google.maps.places.PlacesService(map);
    let getNextPage: () => void | false;
    const moreButton = document.getElementById("more") as HTMLButtonElement;
  
    moreButton.onclick = function () {
      moreButton.disabled = true;
  
      if (getNextPage) {
        getNextPage();
      }
    };
  
    // Perform a nearby search.
    service.nearbySearch(
      { location: pyrmont, radius: 500, type: "store" },
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus,
        pagination: google.maps.places.PlaceSearchPagination | null
      ) => {
        if (status !== "OK" || !results) return;
  
        this.addPlaces(results, map);
        moreButton.disabled = !pagination || !pagination.hasNextPage;
  
        if (pagination && pagination.hasNextPage) {
          getNextPage = () => {
            // Note: nextPage will call the same handler function as the initial call
            pagination.nextPage();
          };
        }
      }
    );
  }
  
   addPlaces(
    places: google.maps.places.PlaceResult[],
    map: google.maps.Map
  ) {
    const placesList = document.getElementById("places") as HTMLElement;
  
    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon!,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        new google.maps.Marker({
          map,
          icon: image,
          title: place.name!,
          position: place.geometry.location,
        });
  
        const li = document.createElement("li");
        li.textContent = place.name!;
        placesList.appendChild(li);
  
        li.addEventListener("click", () => {
          map.setCenter(place.geometry!.location!);
        });
      }
    }
  }
  
title = 'cafe-map';
lat =38.6270;
lng = -90.1994;
zoom = 13;
// map: google.maps.Map;
// service: google.maps.places.PlacesService;
// infowindow: google.maps.InfoWindow;

//     initMap(): void {
//         const stlouis = new google.maps.LatLng(38.6270, -90.1994);

//         this.infowindow = new google.maps.InfoWindow();
  
//         this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//           center: stlouis,
//           zoom: 13,
//         });
//     const request = {
//         location: stlouis,
//         radius: 1000,
//         query: "cafe",
//         fields: ["name", "geometry"],
//       };

//       this.service = new google.maps.places.PlacesService(this.map);

//       this.service.findPlaceFromQuery(
//         request,
//         (
//           results: google.maps.places.PlaceResult[] | null,
//           status: google.maps.places.PlacesServiceStatus
//         ) => {
//           if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//             for (let i = 0; i < results.length; i++) {
//               console.log(results[i]);
//             }

//             this.map.setCenter(results[0].geometry!.location!);
//           }
//         }
//       );

//   function createMarker(place: google.maps.places.PlaceResult) {
//     if (!place.geometry || !place.geometry.location) return;
  
//     const marker = new google.maps.Marker({
//       this.map,
//       position: place.geometry.location,
//     });
  
//     google.maps.event.addListener(marker, "click", () => {
//       this.infowindow.setContent(place.name || "");
//       this.infowindow.open(this.map);
//     });
//   }
//     new google.maps.Map(
//       document.getElementById("agm-map") as HTMLElement,
//       {
//         center: { lat: 38.6270, lng: -90.1994 },
//         zoom: 18,
//         mapId: "2b3be1a732157324",
//       } as google.maps.MapOptions
//     );
 



//https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-typescript



styles = [
{
    "featureType": "all",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "weight": "2.00"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#9c9c9c"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "color": "#f2f2f2"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 45
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#eeeeee"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#7b7b7b"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "color": "#46bcec"
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#c8d7d4"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#070707"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
}
]

}
