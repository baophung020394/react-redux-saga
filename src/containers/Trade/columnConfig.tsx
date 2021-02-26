import moment from "moment";
import { Tag } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "time",
    key: "time",
    render: (time: any) => `${time}`,
  },
  {
    title: "Pair",
    dataIndex: "symbol",
    key: "symbol",
    render: (symbol: any) => `${symbol}`,
  },
  {
    title: "Side",
    dataIndex: "side",
    key: "side",
    render: (side: any) => {
      let cl = side === "Buy" ? "green" : "red";
      return (
        <Tag color={cl} key={side}>
          {side}
        </Tag>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Filled",
    dataIndex: "quantity",
    key: "quantity",
    render: (quantity: any) => `${quantity}`,
  },
  {
    title: "Fee",
    dataIndex: "fee",
    key: "fee",
    render: (fee: any) => `${fee}`,
    className: "fee",
  },
  {
    title: "",
    dataIndex: "feeAsset",
    key: "feeAsset",
    render: (feeAsset: any) => `${feeAsset}`,
    className: "feeAsset",
  },
  {
    title: "Total",
    dataIndex: "totalQuota",
    key: "totalQuota",
    className: "fee",
  },
  {
    title: "",
    dataIndex: "quoteAsset",
    key: "quoteAsset",
    render: (quoteAsset: any) => `${quoteAsset}`,
    className: "feeAsset"
  },
];

export { columns };
