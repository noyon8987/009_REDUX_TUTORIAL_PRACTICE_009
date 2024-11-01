//! Import createStore from Redux
const { createStore } = require("redux")

//! Defining Constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

//! State
const initialCounterState = {
    count: 0
}

//! Dispatch Action - type - payload
const incrementCounterAction = () => {
    return{
        type: INCREMENT
    }
}

const decrementCounterAction = () => {
    return{
        type: DECREMENT
    }
}

const resetCounterAction = () => {
    return{
        type: RESET
    }
}

//! Creat Reducer For Counter
const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:{
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT:{
            return{
                ...state,
                count: state.count - 1
            }
        }
        case RESET:{
            return{
                ...state,
                count: 0
            }
        }
    
        default:
            state;
    }
}

//! Creat Store For Counter
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
store.dispatch(incrementCounterAction())