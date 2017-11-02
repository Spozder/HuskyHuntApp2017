import { Hint, mockHints } from '../models/hint.model';
import {
    HintAction,
    SubmitNewHintAction,
    OpenSolveHintModalAction,
    HintActionTypes
} from './hint.actions'

export interface SolveHintState {
    open: boolean;
    hint: Hint;
}

export interface HintState {
    hintList: Hint[];
    newHintModalOpen: boolean;
    solveHintModal: SolveHintState;
}

export const initialHintState = {
    hintList: mockHints,
    newHintModalOpen: false,
    solveHintModal: {
        open: false,
        hint: mockHints[0]
    }
};

export function hintReducer(state: HintState = initialHintState, action: HintAction): HintState {
    switch(action.type) {
        case HintActionTypes.OPEN_NEW_HINT_MODAL: {
            return {...state, newHintModalOpen: true};
        }
        case HintActionTypes.CLOSE_NEW_HINT_MODAL: {
            return {...state, newHintModalOpen: false};
        }
        case HintActionTypes.SUBMIT_NEW_HINT: {
            let loadAction: SubmitNewHintAction = action as SubmitNewHintAction;
            return {...state, hintList: [...state.hintList, loadAction.payload]}
        }
        case HintActionTypes.OPEN_SOLVE_HINT_MODAL: {
            let loadAction = action as OpenSolveHintModalAction;
            return {...state, solveHintModal: {
                open: true,
                hint: loadAction.payload
            }};
        }
        case HintActionTypes.CLOSE_SLOVE_HINT_MODAL: {
            return {...state, solveHintModal: {
                open: false,
                hint: mockHints[0]
            }};
        }
        default:
            return state;
    }
}