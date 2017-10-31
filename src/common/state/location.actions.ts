import { Action } from '@ngrx/store';

export const LocationActionTypes = {
    CLUE_BLANK: '[Location] Blank Action'
};

export class BlankLocationAction implements Action {
    readonly type = LocationActionTypes.CLUE_BLANK;

    constructor() {
    }
}

export type LocationAction = BlankLocationAction;