// Note: createStore and candyReducer must be exported for the tests to run, but the web page will throw an error if those functions are exported so remove both exports if you want to see the result on the page.

export function createStore(reducer) {
  
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  
  return {
    getState,
    dispatch
  }
}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

// Use your createStore function and the functions provided here to create a store.
let store = createStore(candyReducer);

// Once the store is created, call an initial dispatch.
store.dispatch({ type: "@@INIT" });

store.dispatch( {type: "candies/add", candy: "Snickers"} )