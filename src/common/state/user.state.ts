import { UserAction } from './user.actions';

export interface UserState {
    
}

export const initialUserState = {};

export function userReducer(state: UserState = initialUserState, action: UserAction): UserState {
    switch(action.type) {
        default:
            return state;
    }
}