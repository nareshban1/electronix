/* Defining Default or initial state that can be used in evey modules to define their initialState. Reduces code Redundancy and Follows DRY(DONT REPEAT YOURSELF) Principle */

export interface DefaultState {
  data: any;
  message: string;
  loading: boolean;
  error: boolean;
  success: boolean;
}

const initialState: DefaultState = {
  data: null,
  message: "",
  loading: false,
  error: false,
  success: false,
};

export default initialState;
