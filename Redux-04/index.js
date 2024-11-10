//! Import createStore from Redux
const { createStore } = require("redux");

//! Defining Constant
const INCREMENT = "INCREMENT";
const ADD_USER = "ADD_USER";

//! State
const initialUserState = {
  count: 1,
  user: ["Noyon"],
};

//! Dispatch Action - type - payload
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const incrementAddUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//! Creat Reducer For Counter
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };
    }
  }
};

//! Creat Store For Counter
const store = createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(incrementAddUser("Hablu"));
store.dispatch(incrementAddUser("Rafi"));
store.dispatch(incrementAddUser("Josim"));