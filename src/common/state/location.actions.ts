import { Action } from '@ngrx/store';
import { Location } from '../models/location.model';

export const LocationActionTypes = {
    OPEN_MODAL: '[Location] Open Location Details Modal',
    CLOSE_MODAL: '[Location] Close Location Details Modal'
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

export type LocationAction = OpenLocaitonModalAction | CloseLocationModalAction;