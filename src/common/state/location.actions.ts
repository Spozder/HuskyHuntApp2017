import { Action } from '@ngrx/store';
import { Location } from '../models/location.model';

export const LocationActionTypes = {
    OPEN_MODAL: '[Location] Open Location Details Modal',
    CLOSE_MODAL: '[Location] Close Location Details Modal',
    FOUND_LOCATION: '[Location] Found location',
    ADD_LOCATION: '[Location] Add New Location',
    GET_LOCATIONS_REQUEST: '[Location] Get Locations Request',
    GET_LOCATIONS_SUCCEEDED: '[Location] Get Locations Succeeded',
    GET_LOCATIONS_FAILED: '[Location] Get Locations Failed',
    ADD_LOCATION_SUCCEDED: '[Locatin] Add Location Succeded',
    ADD_LOCATION_FAILED: '[Location] Add Location Failed',
    REMOVE_LOCATION_SUCCEDED: '[Locatoin] Remove Location Succeded',
    REMOVE_LOCATION_FAILED: '[Location] Remove Location Failed'
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

export class AddLocationAction implements Action {
    readonly type = LocationActionTypes.ADD_LOCATION;

    constructor(public payload: Location) {
    }
}

export class GetLocationsRequestAction implements Action {
    readonly type = LocationActionTypes.GET_LOCATIONS_REQUEST;

    constructor() {
    }
}

export class GetLocationsSucceededAction implements Action {
    readonly type = LocationActionTypes.GET_LOCATIONS_SUCCEEDED;

    constructor(public payload: Location[]) {
    }
}

export class GetLocationFailedAction implements Action {
    readonly type = LocationActionTypes.GET_LOCATIONS_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export class AddLocationSuccededAction implements Action {
    readonly type = LocationActionTypes.ADD_LOCATION_SUCCEDED;

    constructor() {
    }
}

export class AddLocationFailedAction implements Action {
    readonly type = LocationActionTypes.ADD_LOCATION_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export class RemoveLocationSucceededAction implements Action {
    readonly type = LocationActionTypes.REMOVE_LOCATION_SUCCEDED;

    constructor() {
    }
}

export class RemoveLocationFailedAction implements Action {
    readonly type = LocationActionTypes.REMOVE_LOCATION_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export type LocationAction = OpenLocaitonModalAction |
    CloseLocationModalAction | FoundLocationAction |
    AddLocationAction | GetLocationsRequestAction |
    GetLocationsSucceededAction | GetLocationFailedAction |
    RemoveLocationSucceededAction | RemoveLocationFailedAction;