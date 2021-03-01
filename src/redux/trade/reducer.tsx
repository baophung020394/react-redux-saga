import actions from "./actions";
const initState = {
  listTrade: []
};

export default function reducer(state = initState, action: any) {
  switch (action.type) {
    case actions.GET_TRADE_SUCCESS:
      return {
        ...state,
        listTrade: action.listTrade,
      };
    default:
      return {
        ...state,
      };
  }
}
