import { SET_USER } from "../actions";

const user = (
  state = { user: { email: null, uid: null }, cart: [] },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return (state = {
        ...state,
        user: action.user
      });

    default:
      return state;
  }
};

export default user;
