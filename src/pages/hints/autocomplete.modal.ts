import { Component, NgZone } from '@angular/core';
import { ViewController } from 'ionic-angular';

declare var google;

@Component({
    selector: 'autocomplete-modal',
    templateUrl: './autocomplete.modal.html'
})
export class AutocompleteModal {
    autocompleteItems;
    autocomplete;

    service = new google.maps.places.AutocompleteService();

    constructor(public viewCtrl: ViewController, private zone: NgZone) {
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: item.description }, (results, status) => {
            this.viewCtrl.dismiss({
                result: item,
                geo: {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
            });
        });
    }

    updateSearch() {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'US' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction);
                });
            });
        });
    }

    //convert Address string to lat and long
    geoCode(adr: string) {
        
    }
}