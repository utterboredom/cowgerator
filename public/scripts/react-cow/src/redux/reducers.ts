import { ADD_CATTLE_REQUEST } from './constants';

interface Action {
    type: string;
    value: any;
}

export function cattle(
    state = {
        color1: "#000000",
        color2: "#000000",
        modifier: ""
    },
    action: Action
) {
    switch (action.type) {
        case ADD_CATTLE_REQUEST:
            return {
                ...state,
                color1: action.value.color1,
                color2: action.value.color2,
                modifier: action.value.modifier
            };

        default:
            return state;
    }
}