import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState =  [...state].sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name ) {
                    return 1;
                }
                return 0;
            }); // need to fix
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= 18)// need to fix
        }
        default:
            return state
    }
}
