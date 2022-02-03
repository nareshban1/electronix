/* One Reducer to reduce them all */

/* This reducer function can be called in any redux module to update the redux state
and as you can already guess it is very reusable in any other projects too */

/* You also dont have to worry about actionNames here cause they will be concatinated with loading,
 succes and failure so that you can dynamically dispatch any actions and dont have to rewrite actionNames */

import { DefaultAction } from "../actions";
import { DefaultState } from "./defaultState";

export const defaultReducer = (
  state: DefaultState,
  action: DefaultAction,
  actionName: string
): DefaultState => {
  switch (action.type) {
    case actionName + "_LOADING": {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    }
    case actionName + "_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        data: action.payload.data,
        message: action.payload.message || "SUCCESS",
      };
    }
    case actionName + "_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        data: action.payload.data || null,
        message: action.payload.message || "SUCCESS",
      };
    }
    default: {
      return state; //return default state if no match
    }
  }
};
