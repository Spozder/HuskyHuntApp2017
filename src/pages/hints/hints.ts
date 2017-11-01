import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NavController, ModalController } from 'ionic-angular';

import { AddHintModal } from './add-hint.modal';

import { Hint } from '../../common/models/hint.model';

import { AppState } from '../../common/state/app.state';
import { OpenNewHintModalAction, CloseNewHintModalAction } from '../../common/state/hint.actions';

@Component({
  selector: 'page-hints',
  templateUrl: 'hints.html'
})
export class HintsPage {
  hints: Observable<[Hint]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private store: Store<AppState>) {
      this.hints = this.store.select('hint', 'hintList');
      this.store.select('hint', 'newHintModalOpen').subscribe((state: boolean) => {
        if (state) {
          const newHintModal = this.modalCtrl.create(AddHintModal);
          newHintModal.present();
        }
      })
  }

  hintTrackByFn(index: number, hint: Hint) {
    return hint.id;
  }

  openAddHintModal() {
    this.store.dispatch(new OpenNewHintModalAction());
  }

}
