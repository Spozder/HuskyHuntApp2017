import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Location } from '../../common/models/location.model';

import { AppState } from '../../common/state/app.state';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  private markerList: any[] = [];

  constructor(public navCtrl: NavController, private appStore: Store<AppState>) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    
    let mapOptions = {
      center: {
        lat: 42.3379668,
        lng: -71.0991816
      },
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      console.log("Location list changed");
      this.appStore.select('location', 'locationList').subscribe((locations: Location[]) => {
        console.log("Map is ready!");

        this.markerList.forEach(element => {
          element.setMap(null);
        });
        this.markerList = [];
        
        locations.forEach((loc: Location) => {
          this.markerList.push(new google.maps.Marker({
            title: loc.name,
            position: {
              lat: loc.lat,
              lng: loc.lng
            },
            map: this.map,
            label: loc.hint.id.toString()
          }));
        });
      });
    });
  }

}
