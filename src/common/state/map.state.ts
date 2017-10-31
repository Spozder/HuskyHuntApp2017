import { MapAction } from './map.actions';

export interface MapState {

}

export const initialMapState = {};

export function mapReducer(state: MapState = initialMapState, action: MapAction): MapState {
    switch(action.type) {
        default:
            return state;
    }
}