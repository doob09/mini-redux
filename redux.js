// createStore will return an object with 3 functions
const createStore = (reducers) => {
    // innitial state is empty;
    // let to reassign  the state later since it is changing frequently

    let state;
    const listeners = [];

    // getState return the current state
    const getState = () => {
        return state;
    };
    // pass the object action as params from button 


    //!What dispatch does is to use reducer to get new state 
    //and notify each listener the state change.
    const dispatch = (action) => {
        // using callback : reducer function pass from createStore;
        // Invoke the reducer (get action from dispatch , state from the top  ) =>return new state
        // assign new state to the current state
        state = reducers(state, action);
        console.log(state);
        // new state is produced. listener need to be updated.
        // run through the array of listeners to invoke function
        listeners.forEach(listener => listener());

        return action;
    };
    // subscibe will take params as fuction adding to the listeners list
    // use closure to return unsub function since using same param
    const subscribe = (listener) => {
        listeners.push(listener);

        return unsubscribe = () => {
            const idx = listeners.indexOf(listener);

            listeners.splice(idx, 1)
        }
    };

    return {
        getState,
        dispatch,
        subscribe
    }
};





















// const createStore = (reducer) => {

//     let state = null;
//     // listeners is array of functions.
//     let listeners = [];

//     // return reference of the state
//     const getState = () => {
//         return state;
//     }
//     // Closure in JS
//     // push single listener to the array when call subscribe 
//     // everytime listener subsribe() will get unsubcribe return
//     // subscibe ()() will invoke the unsubscribe fucntion.
//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return unsubscribe = () => {
//             listeners.splice(listeners.indexOf(listener), 1);
//         }
//     }

//     const dispatch = (action) => {
//         // state is defined null from the beginning
//         state = reducer(state, action);
//         // loop through the each fuction  in the array and invoke;
//         listeners.forEach(listener => listener());
//         return action;
//     }



//     return {
//         getState,
//         subscribe,
//         dispatch,
//     }
// }