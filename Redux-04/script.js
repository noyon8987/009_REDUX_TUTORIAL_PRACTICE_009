//! Import createStore from Redux
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");


//! Defining Product Constant
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//? Defining Cart Constant
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";


//! Product State
const initialProductState = {
  product: ["suger", "salt"],
  numberOfProduct: 2,
};

//? Cart State
const initialCartState = {
    cart: ["BMW"],
    numberOfCart: 1,
  };


//! Dispatch Product Action - type - payload
const getProductAction = () => {
  return {
    type: GET_PRODUCT,
  };
};


const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//? Dispatch Cart Action - type - payload
const getCartAction = () => {
    return {
      type: GET_CART,
    };
  };
  
  
  const addCartAction = (cart) => {
    return {
      type: ADD_CART,
      payload: cart,
    };
  };


//! Creat Product Reducer For Counter
const productReducer = (state = initialProductState, action) => {
    switch(action.type) {
        case GET_PRODUCT: {
            return {
                ...state
            }
        }
        case ADD_PRODUCT: {
            return {
                product: [...state.product, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        }
        default:
            return state
    }
}

//? Creat Cart Reducer For Counter
const cartReducer = (state = initialCartState, action) => {
    switch(action.type) {
        case GET_CART: {
            return {
                ...state
            }
        }
        case ADD_CART: {
            return {
                cart: [...state.cart, action.payload],
                numberOfCart: state.numberOfCart + 1
            }
        }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})


//! Creat CombineReducer Store For Counter
// const store = createStore(productReducer);
// const store = createStore(cartReducer);

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(getProductAction());
store.dispatch(addProductAction("rice"));

store.dispatch(getCartAction());
store.dispatch(addCartAction("TATA"));
store.dispatch(addCartAction("HERO"));