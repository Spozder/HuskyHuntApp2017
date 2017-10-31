import { Action } from '@ngrx/store';

export const HintActionTypes = {
        HINT_BLANK: '[Hint] Blank Action'
};

export class BlankHintAction implements Action {
    readonly type = HintActionTypes.HINT_BLANK;

    constructor() {
    }
}

export type HintAction = BlankHintAction;