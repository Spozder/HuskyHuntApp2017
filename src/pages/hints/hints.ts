import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NavController, ModalController } from 'ionic-angular';

import { AddHintModal } from './add-hint.modal';
import { SolveHintModal } from './solve-hint.modal';

import { Hint } from '../../common/models/hint.model';

import { AppState } from '../../common/state/app.state';
import { SolveHintState } from '../../common/state/hint.state';
import {
  OpenSolveHintModalAction,
  OpenNewHintModalAction,
  CloseNewHintModalAction
} from '../../common/state/hint.actions';

@Component({
  selector: 'page-hints',
  templateUrl: 'hints.html'
})
export class HintsPage {
  hints: Observable<Hint[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private store: Store<AppState>) {
      this.hints = this.store.select('hint', 'hintList');
      this.store.select('hint', 'newHintModalOpen').subscribe((state: boolean) => {
        if (state) {
          const newHintModal = this.modalCtrl.create(AddHintModal);
          newHintModal.present();
        }
      });
      this.store.select('hint', 'solveHintModal').subscribe((state: SolveHintState) => {
        if (state.open) {
          const solveHintModal = this.modalCtrl.create(SolveHintModal, {hint: state.hint});
          solveHintModal.present();
        }
      })
  }

  hintTrackByFn(index: number, hint: Hint) {
    return hint.id;
  }

  openAddHintModal() {
    this.store.dispatch(new OpenNewHintModalAction());
  }

  openSolveHintModal(hintToSolve: Hint) {
    this.store.dispatch(new OpenSolveHintModalAction(hintToSolve));
  }

}
