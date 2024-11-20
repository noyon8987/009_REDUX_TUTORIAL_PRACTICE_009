//! This is practice Example, Please Remover this tomoro!
//? This is practice Example, Please Remover this tomoro!
//! This is practice Example, Please Remover this tomoro!


//! Import createStore from Redux
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

//! Defining Constant
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos"

//! State
const initialTodoState = {
  todos: [],
  isLoging: false,
  error: null,
};

//! Dispatch Action - type - payload
const getRequestAction = () => {
  return {
    type: REQUEST,
  };
};

const getSuccessAction = (todos) => {
  return {
    type: SUCCESS,
    payload: todos
  };
};

const getErrorAction = (error) => {
  return {
    type: FAILED,
    payload: error
  };
};

//! Creat Reducer For Todos
const todosReduce = (state = initialTodoState, action) => {
    switch (action.type) {
        case REQUEST: {
            return {
                ...state,
                isLoging: true,
            }
        }
        case SUCCESS: {
            return {
                ...state,
                todos: action.payload,
                isLoging: false
            }
        }
        case FAILED: {
            return {
                ...state,
                isLoging: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}

//! Async Action Create----
const fetchData = () => {
    return (dispatch) => {
        dispatch(getRequestAction())
        axios.get(API_URL)
        .then((res)=>{
            const todos = res.data;
            const title = todos.map((todo)=> todo.title);
            dispatch(getSuccessAction(title))
        })
        .catch((error)=>{
            const errorMessage = (error.message);
            dispatch(getErrorAction(errorMessage))
        })
    }
}

//! Creat Store For Todos
const store = createStore(todosReduce, applyMiddleware(thunk));
store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(fetchData())

//! This is practice Example, Please Remover this tomoro!
//? This is practice Example, Please Remover this tomoro!
//! This is practice Example, Please Remover this tomoro!
