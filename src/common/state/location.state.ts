import { Location, mockLocations } from './../models/location.model';
import {
    LocationAction,
    OpenLocaitonModalAction,
    LocationActionTypes
} from './location.actions';

export interface LocationDetailsModalState {
    open: boolean;
    loc: Location;
}

export interface LocationState {
    locationList: [Location];
    detailsModal: LocationDetailsModalState;
}

export const initialLocationState = {
    locationList: mockLocations,
    detailsModal: {
        open: false,
        loc: mockLocations[0]
    }
};

export function locationReducer(state: LocationState = initialLocationState,
    action: LocationAction): LocationState {
        switch(action.type) {
            case LocationActionTypes.OPEN_MODAL: {
                let loadAction = action as OpenLocaitonModalAction;
                return {...state, detailsModal: {
                    open: true,
                    loc: loadAction.payload
                }};
            }
            case LocationActionTypes.CLOSE_MODAL: {
                return {...state, detailsModal: {
                    open: false,
                    loc: mockLocations[0]
                }};
            }
            default:
                return state;
        }
}