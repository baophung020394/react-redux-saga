import actions from "./actions";
const initState = {
  listTrade: [],
  loading: false
};

export default function reducer(state = initState, action: any) {
  switch (action.type) {
    case actions.GET_TRADE_SUCCESS:
      return {
        ...state,
        listTrade: action.listTrade,
        loading: false
      };
    case actions.GET_TRADE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}
