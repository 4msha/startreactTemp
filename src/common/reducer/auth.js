
import { USER_AUTHENTICATED, USER_LOGOUT, RESET_STATE,USER_SIGN_IN } from '../actions';


const initialState = {
    email:null,
    username:null,
};

export const auth =  (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case USER_SIGN_IN:{

         return $(initialState);
    }
    case USER_AUTHENTICATED: {
      return $(initialState);
    }
    case USER_LOGOUT:
      console.log("logoutt");
      return $(initialState);

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
