import { Action } from '@ngrx/store';

export const UserActionTypes = {
    USER_BLANK: '[User] Blank Action'
};

export class BlankUserAction implements Action {
    readonly type = UserActionTypes.USER_BLANK;

    constructor() {
    }
}

export type UserAction = BlankUserAction;