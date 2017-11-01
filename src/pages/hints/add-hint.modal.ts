import { Observable } from 'rxjs/Observable';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Hint } from '../../common/models/hint.model';

import { AppState } from '../../common/state/app.state';
import { OpenNewHintModalAction, CloseNewHintModalAction } from '../../common/state/hint.actions';

@Component({
    selector: 'add-hint-modal',
    templateUrl: 'add-hint.modal.html'
})
export class AddHintModal {
    private newHint: Hint;

    constructor(private store: Store<AppState>, public viewCtrl: ViewController) {
        this.store.select('hint', 'newHintModalOpen').subscribe((state: boolean) => {
            if (!state) {
                this.viewCtrl.dismiss();
            }
        })
    }

    dismiss() {
        this.store.dispatch(new CloseNewHintModalAction());
    }
}