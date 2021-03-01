import actions from "./actions";
const initState = {
    loadingTrade: false
  };
  export default function  loadingReducer (state = initState, action: any) {
    switch (action.type) {
        case actions.GET_TRADE:
            return true;
        case actions.GET_TRADE_SUCCESS:
          return false;
        default:
            return state;
      }
};
