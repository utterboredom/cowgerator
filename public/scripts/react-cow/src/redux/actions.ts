import { ADD_CATTLE_REQUEST } from './constants';


export const AddCattleRequest = (value: string) => {
    return {
        type: ADD_CATTLE_REQUEST,
        value,
    };
};
