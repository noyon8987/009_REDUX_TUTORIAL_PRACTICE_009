//! Redux is a JavaScript Library Who is use for Declier State.
//! Overall the system:
//? 1. State Create
//? 2. Dispatch Action
//? 1. Reducer
//? 1. Update Store - getState() - dispatch() - subscribe()

const { createStore } = require("redux")

//! Defining Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// const ADD_USER  = "ADD_USER"

//! State
const initialCounterState = {
    count: 0,
};

// const initialUserState = {
//     user: [
//         {name:"Shahadat Hosen Noyon"}
//     ]
// }

//! Dispatch Action - type - payload
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
};

// const addUserAction = () => {
//     return{
//         type: ADD_USER,
//         payload: {name: "Noyon"}
//     }
// }

//! Creat Reducer For Counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default: state;
    }
};

//! Creat Store For Counter
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(decrementCounterAction())