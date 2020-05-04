const incrementBtn = document.querySelector('.btn');
const count = document.querySelector('.count');
// reducers produce the state of your application.
//reducer will pass initial state as default and actions to the store 
//reducer will define the action 
const reducer = (state = 0, action) => {
    console.log(state);
    if (action.actionType === 'INCREMENT') {
        let newstate = state + 1;
        return newstate;
    }

};

// create store by using createStore function with reducer as argument
// the store can: get State, dispatch, subscribe or unsubscribe 
const store = createStore(reducer);


// add eventlistener to the button 
// when event trigger it will dispatch the action to the reducer
// dispatch will update the state as well when calling: create innitial state
// action is an object
incrementBtn.addEventListener('click', () => {
    // todo dispatch
    store.dispatch({ actionType: 'INCREMENT' });
});

// subscribe UI to the store  to update the lastest state by using getState
// add subscriber as function to the subscribers List: which is array of function 
store.subscribe(() => {

    count.innerHTML = `${store.getState()}`;
});








// // global state management approach using redux
// // check the type of action and initial state.
// const reducer = (state = 1, action) => {
//     if (action.type === 'INCREMENT') {
//         return ++state;
//     }
// };

// const store = createStore(reducer);

// incrementBtn.addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT' })
// });

// store.subscribe(() => {
//     count.innerHTML = `${store.getState()}`;
// });







//local state management approach
// defime the initial state

// the lifetime of a global variable starts with it's decleation
// ! and it is deleted when the page is closed

// -------

// btn.addEventListener('click', () => {
//     increment();
// });

// // ()() to invoke the inner function
// const increment = (() => {
//     // local variable inside a function: it is created when a function starts
//     //! and deleted as soon as the function complete execution.
//     // everytime excute the function state will start 0 again;
//     // let state = 0;
//     let state = 0;
//     //  use closure to solve the local variable deleted once its function executed;
//     return () => {
//         state++;
//         return count.innerHTML = `${state}`;
//     }
// })();
