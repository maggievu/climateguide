import storeState from '../components/main/storeState.json';

const reducer =  (state = storeState[0], action) => {
    switch (action.type) {
        case "FIRST":
            return storeState[0];
        case "SECOND":
            return storeState[1];
        case "THIRD":
            return storeState[2];
        case "PREV":
            return state.index !== 0 ? storeState[state.index - 1] : storeState[2];
        case "NEXT":
            return state.index !== 2 ? storeState[state.index + 1] : storeState[0];
        default:
            return state;
    }
};

export default reducer;
