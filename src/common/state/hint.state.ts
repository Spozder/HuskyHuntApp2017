import { HintAction } from './hint.actions'
import { Hint, mockHints } from '../models/hint.model';

export interface HintState {
    hintList: [Hint];
}

export const initialHintState = {
    hintList: mockHints
};

export function hintReducer(state: HintState = initialHintState, action: HintAction): HintState {
    switch(action.type) {
        default:
            return state;
    }
}