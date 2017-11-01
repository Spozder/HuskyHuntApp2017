import { Hint, mockHints } from '../models/hint.model';
import {
    HintAction,
    HintActionTypes
} from './hint.actions'

export interface HintState {
    hintList: [Hint];
    newHintModalOpen: boolean;
}

export const initialHintState = {
    hintList: mockHints,
    newHintModalOpen: false
};

export function hintReducer(state: HintState = initialHintState, action: HintAction): HintState {
    switch(action.type) {
        case HintActionTypes.OPEN_NEW_HINT_MODAL: {
            return {...state, newHintModalOpen: true};
        }
        case HintActionTypes.CLOSE_NEW_HINT_MODAL: {
            return {...state, newHintModalOpen: false};
        }
        default:
            return state;
    }
}