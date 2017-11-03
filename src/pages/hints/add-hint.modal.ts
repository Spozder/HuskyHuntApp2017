import { Observable } from 'rxjs/Observable';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Hint } from '../../common/models/hint.model';

import { AppState } from '../../common/state/app.state';
import { OpenNewHintModalAction, CloseNewHintModalAction, SubmitNewHintAction } from '../../common/state/hint.actions';

@Component({
    selector: 'add-hint-modal',
    templateUrl: 'add-hint.modal.html'
})
export class AddHintModal {
    private newHint: Hint;
    private newHintFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private store: Store<AppState>, public viewCtrl: ViewController) {
        this.store.select('hint', 'newHintModalOpen').subscribe((state: boolean) => {
            if (!state) {
                this.viewCtrl.dismiss();
            }
        });
        this.newHintFormGroup = this.formBuilder.group({
            id: [Validators.required],
            text: ['', Validators.required],
        });
    }

    dismiss() {
        this.store.dispatch(new CloseNewHintModalAction());
    }

    submitNewHint() {
        this.store.dispatch(new SubmitNewHintAction({
            id: Number(this.newHintFormGroup.value.id),
            text: this.newHintFormGroup.value.text
        }));
        this.dismiss();
    }
}