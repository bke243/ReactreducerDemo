const initialstate = {
    counter: 0
}

const reducer = (state = initialstate, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUBSTRACT') {
        return {
            counter: state.counter + action.value
        }
    }
    return state;
};



export default reducer;