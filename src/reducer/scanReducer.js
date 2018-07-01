import { SCAN_INPROGRESS, SCAN_SUCCESS }
from '../actions/actionTypes';

const InitialState = {
  loading: false,
  scanResult: null
};

const scanReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SCAN_INPROGRESS:
    return {
      ...state,
      loading: action.loading

    };
    case SCAN_SUCCESS:
    return {
      ...state,
      loading: action.loading,
      scanResult: action.scanResult
      
    };
    default:
      return state;  
  }
};

export default scanReducer;
