import { Observable } from 'rxjs/Observable';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Location } from '../../common/models/location.model';
import { Hint } from '../../common/models/hint.model';

import { AutocompleteModal } from './autocomplete.modal';

import { AppState } from '../../common/state/app.state';
import { SolveHintState } from '../../common/state/hint.state';
import { CloseSolveHintModalAction, SolveHintAction } from '../../common/state/hint.actions';
import { AddLocationAction } from '../../common/state/location.actions';

@Component({
    selector: 'solve-hint-modal',
    templateUrl: 'solve-hint.modal.html'
})
export class SolveHintModal {
    private hintToSolve: Hint;
    private newLoc: Location;

    constructor(params: NavParams, private store: Store<AppState>, public viewCtrl: ViewController, private modalCtrl: ModalController) {
        this.hintToSolve = params.get("hint");
        this.newLoc = {
            name: '',
            lat: 0,
            lng: 0,
            address: '',
            hint: this.hintToSolve,
            assignment: 0
        };
        this.store.select('hint', 'solveHintModal').subscribe((state: SolveHintState) => {
            if (!state.open) {
                this.viewCtrl.dismiss();
            }
        });
    }

    dismiss() {
        this.store.dispatch(new CloseSolveHintModalAction());
    }
    
    showAddressModal () {
        console.log("Tried to show modal");
        let modal = this.modalCtrl.create(AutocompleteModal);
        let me = this;
        modal.onDidDismiss(data => {
            this.newLoc.name = data.result.description.split(',')[0];
            this.newLoc.address = data.result.description;
            this.newLoc.lat = data.geo.lat;
            this.newLoc.lng = data.geo.lng;
            console.log(JSON.stringify(data.result));
        });
        modal.present();
    }

    submit() {
        this.store.dispatch(new SolveHintAction(this.newLoc));
        this.store.dispatch(new AddLocationAction(this.newLoc));
        this.store.dispatch(new CloseSolveHintModalAction());
    }

    isLocationValid() {
        return this.newLoc.name != '';
    }
}