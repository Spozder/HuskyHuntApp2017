import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import {
    HintActionTypes,
    GetHintsSuccededAction,
    GetHintsFailedAction,
    SubmitNewHintAction,
    CreateHintSucceededAction,
    CreateHintFailedAction,
    SolveHintAction,
    DeleteHintSucceededAction,
    DeleteHintFailedAction
} from './hint.actions';

import { apiBase } from '../config';

@Injectable()
export class HintEffects {
    constructor(private http: Http, private actions: Actions) {
    }

    // Listen for hint request action
    @Effect() getHintsRequestActionObservable: Observable<Action> = this.actions.ofType(HintActionTypes.GET_HINTS_REQUEST)
        .mergeMap<Action, Action>(action => {
            return this.http.get(apiBase + "/hints")
                .map(data => {
                    return new GetHintsSuccededAction(data.json());
                })
                .catch(error => {
                    console.log(error);
                    return of(new GetHintsFailedAction(error));
                });
        });

    // Listen for hint create action
    @Effect() createHintActionObservable: Observable<Action> = this.actions.ofType(HintActionTypes.SUBMIT_NEW_HINT)
        .mergeMap<Action, Action>(action => {
            let loadAction = action as SubmitNewHintAction;
            return this.http.post(apiBase + "/hints", loadAction.payload)
                .map(data => new CreateHintSucceededAction())
                .catch(error => of(new CreateHintFailedAction(error)));
        });

    // Listen for hint delete action
    @Effect() solveHintActionObservable: Observable<Action> = this.actions.ofType(HintActionTypes.SOLVE_HINT)
        .mergeMap<Action, Action>(action => {
            let loadAction = action as SolveHintAction;
            return this.http.delete(apiBase + "/hints/" + loadAction.payload.hint.id)
                .map(data => new DeleteHintSucceededAction())
                .catch(error => of(new DeleteHintFailedAction(error)));
        });
}