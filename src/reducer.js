import { BUG_ADDED,BUG_REMOVED} from './ActionTypes'
let lastId = 0
export default function reducer(state = [], action) {
    if (action.type === BUG_ADDED) {
        return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }]
    }
    else if (action.type === BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.payload.id)
    } else {
        return state
    }

}