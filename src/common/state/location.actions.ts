import { Action } from '@ngrx/store';
import { Location } from '../models/location.model';

export const LocationActionTypes = {
    OPEN_MODAL: '[Location] Open Location Details Modal',
    CLOSE_MODAL: '[Location] Close Location Details Modal',
    FOUND_LOCATION: '[Location] Found location'
};

export class OpenLocaitonModalAction implements Action {
    readonly type = LocationActionTypes.OPEN_MODAL;
    
    constructor(public payload: Location) {
    }
}

export class CloseLocationModalAction implements Action {
    readonly type = LocationActionTypes.CLOSE_MODAL;

    constructor() {
    }
}

export class FoundLocationAction implements Action {
    readonly type = LocationActionTypes.FOUND_LOCATION;

    constructor(public payload: Location) {
    }
}

export type LocationAction = OpenLocaitonModalAction | CloseLocationModalAction |
    FoundLocationAction;