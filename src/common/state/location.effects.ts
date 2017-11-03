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
    LocationActionTypes,
    GetLocationsSucceededAction,
    GetLocationFailedAction,
    AddLocationAction,
    AddLocationSuccededAction,
    AddLocationFailedAction,
    FoundLocationAction,
    RemoveLocationSucceededAction,
    RemoveLocationFailedAction
} from './location.actions';

import { apiBase } from '../config';

@Injectable()
export class LocationEffects {
    constructor(private http: Http, private actions: Actions) {
    }

    // Listen for locations request action
    @Effect() getLocationsRequestActionObservable: Observable<Action> = this.actions.ofType(LocationActionTypes.GET_LOCATIONS_REQUEST)
        .mergeMap<Action, Action>(action => {
            return this.http.get(apiBase + "/locations")
                .map(data => {
                    return new GetLocationsSucceededAction(data.json());
                })
                .catch(error => {
                    console.log(error);
                    return of(new GetLocationFailedAction(error));
                });
        });

    // Listen for location create action
    @Effect() createLocationActionObservable: Observable<Action> = this.actions.ofType(LocationActionTypes.ADD_LOCATION)
        .mergeMap<Action, Action>(action => {
            let loadAction = action as AddLocationAction;
            return this.http.post(apiBase + "/locations", loadAction.payload)
                .map(data => new AddLocationSuccededAction())
                .catch(error => of(new AddLocationFailedAction(error)));
        });

    // Listen for location delete action
    @Effect() deleteLocationActionObservable: Observable<Action> = this.actions.ofType(LocationActionTypes.FOUND_LOCATION)
        .mergeMap<Action, Action>(action => {
            let loadAction = action as FoundLocationAction;
            return this.http.delete(apiBase + "/locations/" + loadAction.payload.hint.id)
                .map(data => new RemoveLocationSucceededAction())
                .catch(error => of(new RemoveLocationFailedAction(error)));
        });
}