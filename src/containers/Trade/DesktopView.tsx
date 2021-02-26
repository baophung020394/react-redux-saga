import React, { Component, useState } from "react";
import { connect } from "react-redux";
import tradeActions from "../../redux/trade/actions";
import { columns } from "./columnConfig";
import { DateRangePicker } from "rsuite";
import isAfter from "date-fns/isAfter";
import { Table, Tag, Space } from "antd";
import TradeHistory from "../../components/Page/TradeHistory/TradeHistory";
const { getListTrade } = tradeActions;
class DesktopView extends Component<{ listTrade: []; getListTrade: any; loading: boolean }> {

  constructor(props:any) {
    super(props);
    this.state = {
      loading: this.props.loading
    };
  }

  componentDidMount() {
    // this.setState({ loading: false });
    this.props.getListTrade(0, 5);
  }

  render() {
    
    let { listTrade, loading } = this.props;
    // Search onSubmit
    return (
      <div>
        <TradeHistory />
        {/* <div >
          ...Loading
        </div> */}
        {
          !listTrade.length ? (
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
  const { loading } = state.TradeManager;
  return {
    listTrade,
    loading
  };
}

export default connect(mapStateToProps, {
  getListTrade,
})(DesktopView);
