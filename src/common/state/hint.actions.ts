import { Action } from '@ngrx/store';
import { Hint } from '../models/hint.model';
import { Location } from '../models/location.model';

export const HintActionTypes = {
    OPEN_SOLVE_HINT_MODAL: '[Hint] Open Solve Hint Modal',
    CLOSE_SLOVE_HINT_MODAL: '[Hint] Close Solve Hint Modal',
    OPEN_NEW_HINT_MODAL: '[Hint] Open New Hint Modal',
    CLOSE_NEW_HINT_MODAL: '[Hint] Close New Hint Modal',
    SUBMIT_NEW_HINT: '[Hint] Submit New Hint',
    SOLVE_HINT: '[Hint] Solve Hint'
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

export class SubmitNewHintAction implements Action {
    readonly type = HintActionTypes.SUBMIT_NEW_HINT;

    constructor(public payload: Hint) {
    }
}

export class OpenSolveHintModalAction implements Action {
    readonly type = HintActionTypes.OPEN_SOLVE_HINT_MODAL;

    constructor(public payload: Hint) {
    }
}

export class CloseSolveHintModalAction implements Action {
    readonly type = HintActionTypes.CLOSE_SLOVE_HINT_MODAL;

    constructor() {
    }
}

export class SolveHintAction implements Action {
    readonly type = HintActionTypes.SOLVE_HINT;

    constructor(public payload: Location) {
    }
}

export type HintAction = OpenNewHintModalAction |
    CloseNewHintModalAction | SubmitNewHintAction |
    OpenSolveHintModalAction | CloseSolveHintModalAction |
    SolveHintAction;