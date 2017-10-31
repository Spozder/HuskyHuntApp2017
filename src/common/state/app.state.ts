import {ActionReducer} from '@ngrx/store';
import { UserState, initialUserState, userReducer } from './user.state';
import { HintState, initialHintState, hintReducer } from './hint.state';
import { MapState, initialMapState, mapReducer } from './map.state';
import { LocationState, initialLocationState, locationReducer } from './location.state';

export interface AppState {
    user: UserState;
    hint: HintState;
    map: MapState;
    location: LocationState;
}

export const initialAppState: AppState = {
    user: initialUserState,
    hint: initialHintState,
    map: initialMapState,
    location: initialLocationState
}

export const appStateReducers: {[key: string]: ActionReducer<any>} = {
    user: userReducer,
    hint: hintReducer,
    map:  mapReducer,
    location: locationReducer
}