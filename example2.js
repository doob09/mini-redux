const btnInct = document.querySelector('#example-2 .btn-inct');
const btnDect = document.querySelector('#example-2 .btn-dect');
const count2 = document.querySelector('#example-2 .count');

// pass object: {inctReducer: increment function} to combineReducers
// return {inctReducer : state};
const combineReducers = (reducers) => {
    // assign each reducers to keys to have key : callback function
    const keys = Object.keys(reducers);

    //callback function to use for dispatch(action);
    return (state = {}, action) => {

        let newState = {};

        keys.forEach((key) => {
            newState[key] = reducers[key](state[key], action);
        });
        return newState;
    };
};


const increment = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state ? state + 1 : 1;
    }
    return state;
}

// return {inctReducer : state};
const reds = combineReducers({
    inctReducer: increment,
    // dectReducer: decrement
});

// pass object {counterReducer: function(state,action)} to createStore
const store = createStore(reds);


btnInct.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});


store.subscribe(() => {

    count2.innerHTML = `${store.getState().inctReducer}`;
});
