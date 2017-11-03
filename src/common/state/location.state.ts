import { Location, mockLocations } from './../models/location.model';
import {
    LocationAction,
    OpenLocaitonModalAction,
    FoundLocationAction,
    LocationActionTypes,
    AddLocationAction,
    GetLocationsSucceededAction,
    SetDistanceSortSucceededAction
} from './location.actions';

export interface LocationDetailsModalState {
    open: boolean;
    loc: Location;
}

export interface LocationState {
    locationList: Location[];
    detailsModal: LocationDetailsModalState;
}

export const initialLocationState = {
    locationList: mockLocations,
    detailsModal: {
        open: false,
        loc: mockLocations[0]
    }
};

declare var google;

function sortByDistance(locList: Location[], pos: {lat: number, lng: number}): Location[] {
    console.log(locList);
    console.log(pos);
    return locList.sort((loc1, loc2) => {
        if (google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng({lat: loc1.lat, lng: loc1.lng}), new google.maps.LatLng(pos)) <
        google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng({lat: loc2.lat, lng: loc2.lng}), new google.maps.LatLng(pos))) {
            return -1;
        } else {
            return 1;
        }
    });
}

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
            case LocationActionTypes.FOUND_LOCATION: {
                let loadAction = action as FoundLocationAction;
                return {...state, locationList: [...state.locationList].filter((l) => l != loadAction.payload)};
            }
            case LocationActionTypes.ADD_LOCATION: {
                let loadAction = action as AddLocationAction;
                return {...state, locationList: [...state.locationList, loadAction.payload]};
            }
            case LocationActionTypes.GET_LOCATIONS_SUCCEEDED: {
                let loadAction = action as GetLocationsSucceededAction;
                return {...state, locationList: [...loadAction.payload]};
            }
            case LocationActionTypes.SET_DISTANCE_SORT_SUCCEEDED: {
                let loadAction = action as SetDistanceSortSucceededAction;
                return {...state, locationList: sortByDistance([...state.locationList], loadAction.payload)};
            }
            default:
                return state;
        }
}