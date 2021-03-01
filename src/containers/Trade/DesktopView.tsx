import React, { Component, useState } from "react";
import { connect } from "react-redux";
import tradeActions from "../../redux/trade/actions";
import { columns } from "./columnConfig";
import { DateRangePicker } from "rsuite";
import isAfter from "date-fns/isAfter";
import { Table, Tag, Space } from "antd";
import TradeHistory from "../../components/Page/TradeHistory/TradeHistory";
const { getListTrade } = tradeActions;
class DesktopView extends Component<{ listTrade: []; getListTrade: any; loadingTrade: boolean }> {


  componentDidMount() {
    console.log(this.props.loadingTrade)
    this.props.getListTrade(0, 5);
  }

  render() {
    
    let { listTrade, loadingTrade } = this.props;
    console.log(loadingTrade);
    // Search onSubmit
    return (
      <div>
        <TradeHistory />
        {
          loadingTrade ? (
            <h1>concac</h1>
          ) : (
            <Table
            columns={columns}
            dataSource={listTrade}
            rowKey="tradeId"
            pagination={{ defaultPageSize: 15 }}
          />
          )
        }
       
       
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { listTrade } = state.TradeManager;
  const { loadingTrade } = state.LoadingManager;
  return {
    listTrade,
    loadingTrade
  };
}

export default connect(mapStateToProps, {
  getListTrade, 
})(DesktopView);
