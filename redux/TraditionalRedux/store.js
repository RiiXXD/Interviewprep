//applyMiddleware is a middleware enhancer provided by Redux to add custom functionality
//to the Redux dispatch process. Middleware allows you to extend Redux with custom
//behavior, such as logging, crash reporting, or handling asynchronous actions.
// Purpose:
// Middleware provides a third-party extension point between dispatching an action and
//  the moment it reaches the reducer. It allows you to intercept actions and add additional
// logic before the action reaches the reducer.
import { applyMiddleware } from "redux";

// combineReducers is a utility function provided by Redux that helps you combine
// multiple reducer functions into a single reducer function. This combined reducer
// can then be passed to the Redux store.
import { combineReducers } from "redux";

//legacy_createStore is a function provided by Redux to create a Redux store.
//It is part of the Redux API and allows you to set up the store with a reducer,
//initial state, and middleware.As of Redux 4.1.0, legacy_createStore is a renamed
//version of the createStore function to encourage migration to the new Redux Toolkit API.

import { legacy_createStore } from "redux";

//A "thunk" is a middleware function in Redux that allows you to
//write action creators that return a function instead of an
//action.This middleware, known as redux-thunk, enables you to
//handle asynchronous operations inside your action creators, such as
//API calls or delayed actions.
//Purpose:
// The primary purpose of redux-thunk is to allow for more complex action logic,
// particularly for dealing with asynchronous code.
// Without middleware like redux-thunk,
// Redux action creators can only return plain action objects.
import { thunk } from "redux-thunk";

import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as recipeReducer } from "./Recipe/reducer";

const rootReducer = combineReducers({
  authReducer,
  recipeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
