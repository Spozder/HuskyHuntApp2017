import { Action } from '@ngrx/store';

export const MapActionTypes = {
    MAP_BLANK: '[Map] Blank Action'
};

export class BlankMapAction implements Action {
    readonly type = MapActionTypes.MAP_BLANK;

    constructor() {
    }
}

export type MapAction = BlankMapAction;