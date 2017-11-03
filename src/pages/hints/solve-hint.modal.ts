import { Observable } from 'rxjs/Observable';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Hint } from '../../common/models/hint.model';

import { AutocompleteModal } from './autocomplete.modal';

import { AppState } from '../../common/state/app.state';
import { SolveHintState } from '../../common/state/hint.state';
import { CloseSolveHintModalAction } from '../../common/state/hint.actions';

@Component({
    selector: 'solve-hint-modal',
    templateUrl: 'solve-hint.modal.html'
})
export class SolveHintModal {
    private hintToSolve: Hint;
    private address: any;

    constructor(params: NavParams, private store: Store<AppState>, public viewCtrl: ViewController, private modalCtrl: ModalController) {
        this.hintToSolve = params.get("hint");
        this.address = {
            place: ''
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
          this.address.place = data.result;
        });
        modal.present();
    }
}