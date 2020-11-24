import { ADD_CATEGORY } from "../actions";

const user = (
  state = { user: { email: null, uid: null }, cart: [] },
  action
) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return (state = {
        ...state,
        user: action.user
      });

    default:
      return state;
  }
};

export default user;
