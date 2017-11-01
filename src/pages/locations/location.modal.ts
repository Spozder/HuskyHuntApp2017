import { Observable } from 'rxjs/Observable';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Location } from '../../common/models/location.model';

import { AppState } from '../../common/state/app.state';
import { LocationDetailsModalState } from '../../common/state/location.state';
import { CloseLocationModalAction, OpenLocaitonModalAction } from '../../common/state/location.actions'; 

declare var google;

@Component({
    selector: 'location-details-modal',
    templateUrl: 'location.modal.html'
  })
  export class LocationDetailsModal {
    private loc: Location;
    @ViewChild("locMap") mapElement: ElementRef;
    locMap: any;

    private marker: any;
  
    constructor(params: NavParams, private store: Store<AppState>, public viewCtrl: ViewController) {
      this.loc = params.get('location');
      this.store.select('location', 'detailsModal').subscribe((state: LocationDetailsModalState) => {
          if (!state.open) {
              this.viewCtrl.dismiss();
          }
      });
    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {
        let mapOtions = {
            center: {
                lat: this.loc.lat,
                lng: this.loc.lng
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.locMap = new google.maps.Map(this.mapElement.nativeElement, mapOtions);

        google.maps.event.addListenerOnce(this.locMap, 'idle', () => {
            this.marker = new google.maps.Marker({
                title: this.loc.name,
                position: {
                    lat: this.loc.lat,
                    lng: this.loc.lng
                },
                map: this.locMap
            });
        });
    }
  
    dismiss() {
      this.store.dispatch(new CloseLocationModalAction());
    }

    navigateToLoc() {
        window.open('http://maps.google.com?q=' + this.loc.address, '_system');
    }
  }