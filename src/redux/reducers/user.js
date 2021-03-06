import { SET_USER_INFO, GET_CARDS, GET_WALLETS } from "../type";

const initialState = {
  data: {},
  cards:[],
  wallets:[]
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SET_USER_INFO:
    //   return {
    //     ...state,
    //     data: payload,
    //   };
case GET_WALLETS:
  return{
    ...state,
    wallets: payload?.wallet
  }


case GET_CARDS:
  return{
...state,
cards:payload?.cards
  }

    default:
      return state;
  }
};

export default UserReducer;
