
export default (state, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                weathers: action.payload
            }

        default:
            return state;
    }
}