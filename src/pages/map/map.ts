import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { GoogleMap, GoogleMaps, GoogleMapOptions,
  GoogleMapsEvent } from '@ionic-native/google-maps';
  
  import { Location } from '../../common/models/location.model';
  
  import { AppState } from '../../common/state/app.state';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, private appStore: Store<AppState>) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = new GoogleMap(this.mapElement, mapOptions);
    
    this.appStore.select('location', 'locationList').subscribe((locations: [Location]) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log("Map is ready!");
        
        locations.forEach((loc: Location) => {
          this.map.addMarker({
            title: loc.name,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: loc.lat,
              lng: loc.lng
            }
          })

          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
              alert('clicked');
            });
          });
        });
      });
    });
  }

}
