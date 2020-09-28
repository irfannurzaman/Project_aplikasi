import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Irfan Nurzaman',
  address: 'Jakarta Selatan',
  status: '1',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type == 'CLICK_STATUS') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
