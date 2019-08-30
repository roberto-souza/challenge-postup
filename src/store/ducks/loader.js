const Types = {
  START: 'loader/START',
  FINISH: 'loader/FINISH',
};

export const LoaderTypes = Types;

const INITIAL_STATE = {
  show: false,
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.START:
      return { ...state, show: true };
    case Types.FINISH:
      return { ...state, show: false };
    default:
      return state;
  }
}

const LoaderActions = {
  start: () => ({
    type: Types.START,
  }),
  finish: () => ({
    type: Types.FINISH,
  }),
};

export default LoaderActions;
