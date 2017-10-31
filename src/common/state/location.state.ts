import { Location, mockLocations } from './../models/location.model';
import { LocationAction } from './location.actions';

export interface LocationState {
    locationList: [Location];
}

export const initialLocationState = {
    locationList: mockLocations
};

export function locationReducer(state: LocationState = initialLocationState,
    action: LocationAction): LocationState {
        switch(action.type) {
            default:
                return state;
        }
}