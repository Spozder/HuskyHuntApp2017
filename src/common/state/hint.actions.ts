import { Action } from '@ngrx/store';
import { Hint } from '../models/hint.model';
import { Location } from '../models/location.model';

export const HintActionTypes = {
    OPEN_SOLVE_HINT_MODAL: '[Hint] Open Solve Hint Modal',
    CLOSE_SLOVE_HINT_MODAL: '[Hint] Close Solve Hint Modal',
    OPEN_NEW_HINT_MODAL: '[Hint] Open New Hint Modal',
    CLOSE_NEW_HINT_MODAL: '[Hint] Close New Hint Modal',
    SUBMIT_NEW_HINT: '[Hint] Submit New Hint',
    SOLVE_HINT: '[Hint] Solve Hint',
    GET_HINTS_REQUEST: '[Hint] Get Hints',
    GET_HINTS_SUCCEEDED: '[Hint] Get Hints Succeeded',
    GET_HINTS_FAILED: '[Hint] Get Hints Failed',
    CREATE_HINT_SUCCEEDED: '[Hint] Create Hint Succeeded',
    CREATE_HINT_FAILED: '[Hint] Create Hint Failed',
    DELETE_HINT_SUCCEEDED: '[Hint] Delete Hint Succeeded',
    DELETE_HINT_FAILED: '[Hint] Delete Hint Failed'
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

export class GetHintsRequestAction implements Action {
    readonly type = HintActionTypes.GET_HINTS_REQUEST;

    constructor() {
    }
}

export class GetHintsSuccededAction implements Action {
    readonly type = HintActionTypes.GET_HINTS_SUCCEEDED;

    constructor(public payload: Hint[]) {
    }
}

export class GetHintsFailedAction implements Action {
    readonly type = HintActionTypes.GET_HINTS_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export class CreateHintSucceededAction implements Action {
    readonly type = HintActionTypes.CREATE_HINT_SUCCEEDED;

    constructor() {
    }
}

export class CreateHintFailedAction implements Action {
    readonly type = HintActionTypes.CREATE_HINT_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export class DeleteHintSucceededAction implements Action {
    readonly type = HintActionTypes.DELETE_HINT_SUCCEEDED;

    constructor() {
    }
}

export class DeleteHintFailedAction implements Action {
    readonly type = HintActionTypes.DELETE_HINT_FAILED;

    constructor(public payload: {error: string}) {
    }
}

export type HintAction = OpenNewHintModalAction |
    CloseNewHintModalAction | SubmitNewHintAction |
    OpenSolveHintModalAction | CloseSolveHintModalAction |
    SolveHintAction | GetHintsRequestAction |
    GetHintsSuccededAction | GetHintsFailedAction |
    CreateHintSucceededAction | CreateHintFailedAction |
    DeleteHintSucceededAction | DeleteHintFailedAction;