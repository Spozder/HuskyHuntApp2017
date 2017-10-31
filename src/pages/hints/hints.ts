import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NavController } from 'ionic-angular';

import { Hint } from '../../common/models/hint.model';

import { AppState } from '../../common/state/app.state';

@Component({
  selector: 'page-hints',
  templateUrl: 'hints.html'
})
export class HintsPage {
  hints: Observable<[Hint]>;

  constructor(public navCtrl: NavController,
    private store: Store<AppState>) {
      this.hints = this.store.select('hint', 'hintList');
  }

  hintTrackByFn(index: number, hint: Hint) {
    return hint.id;
  }

}
