lastId = 0
function reducer(state = [], action) {
    if (action === "BUG_ADDED") {
        return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }]
    } else if (action === "BUG_REMOVED") {
        return state.filter(bug => bug.id != action.payload.id)
    } else {
        return state
    }

}