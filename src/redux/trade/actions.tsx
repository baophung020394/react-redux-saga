const prefix = "TRADE/";
const actions = {
  GET_TRADE: prefix + "GET_TRADE",
  GET_TRADE_SUCCESS: prefix + "GET_TRADE_SUCCESS",
  GET_TRADE_LOADING: prefix + "GET_TRADE_LOADING",
  GET_TRADE_FAILED: prefix + "GET_TRADE_FAILED",

  getListTrade: (page: number, size: number) => ({
    type: actions.GET_TRADE,
    page,
    size,
  }),
};
export default actions;
