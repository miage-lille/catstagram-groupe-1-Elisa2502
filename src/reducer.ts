import { Loop, liftState } from 'redux-loop';
import { compose } from 'redux';
import { Actions } from './types/actions.type';
import fakeData from "./fake-datas.json";
import { Picture } from './types/picture.type';

export type State = {
  counter: number,
  pictures: Picture [],
}

export const defaultState: State = {
  counter: 0,
  pictures: fakeData,
}

export const reducer = (state: State | undefined, action: Actions): State | Loop<State> => {
  if (!state) return defaultState; // mandatory by redux
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, counter: state.counter + 1};

    case 'DECREMENT': 
      return { ...state, counter: Math.max(3, state.counter - 1)};
      
    case 'SELECT_PICTURE':
      
      return {...state, pictures: state.pictures.slice(Math.min(state.counter), state.pictures.length)};

    case 'CLOSE_MODAL':
      throw 'Not Implemented';

    case 'FETCH_CATS_REQUEST':
      throw 'Not Implemented';

    case 'FETCH_CATS_COMMIT':
      throw 'Not Implemented';
      
    case 'FETCH_CATS_ROLLBACK':
      throw 'Not Implemented';
  }
};

export const counterSelector = (state: State) => {
  return state.counter;
};
export const picturesSelector = (state: State) => {
  return state.pictures;
};
export const getSelectedPicture = (state: State) => {
  throw 'Not Implemented';
};

export default compose(liftState, reducer);
