//! Import createStore from Redux
const {createStore} = require("redux")

//! Defining Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_USER = "INCREMENT_USER";

//! State
const initialCountState = {
  count: 0,
};

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

const incrementCounterUser = (value) => {
  return {
    type: INCREMENT_USER,
    payload: value,
  };
};

//! Creat Reducer For Counter
const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case INCREMENT_USER: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default:
      state;
  }
};

//! Creat Store For Counter
const store = createStore(counterReducer);
store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterUser(15));
store.dispatch(incrementCounterUser(14));
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());