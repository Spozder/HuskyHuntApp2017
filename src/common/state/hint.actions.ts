import { Action } from '@ngrx/store';

export const HintActionTypes = {
    OPEN_NEW_HINT_MODAL: '[Hint] Open New Hint Modal',
    CLOSE_NEW_HINT_MODAL: '[Hint] Close New Hint Modal'
};

export class OpenNewHintModalAction implements Action {
    readonly type = HintActionTypes.OPEN_NEW_HINT_MODAL;

    constructor() {
    }
}

export class CloseNewHintModalAction implements Action {
    readonly type = HintActionTypes.CLOSE_NEW_HINT_MODAL;

    constructor() {
    }
}

export type HintAction = OpenNewHintModalAction | CloseNewHintModalAction;