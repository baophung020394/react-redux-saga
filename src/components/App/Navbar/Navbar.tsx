import React, { Fragment as div, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
    
function Navbar() {
    const styleMenu = {
        paddingLeft: "10px"
    }
    const rootSubmenuKeys = ['sub1', 'sub2','sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10'];
   
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    const onOpenChange = (keys:any) => {
        const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    const SVGSpotOrder = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon-menu-sidebar"><path d="M6.093 8.889c-.567 0-1.031-.438-1.031-.972 0-.535.464-.973 1.03-.973h12.846V5H6.093C4.38 5 3 6.303 3 7.917v8.166C3 17.697 4.381 19 6.093 19H21V8.889H6.093zm12.845 8.167H6.093c-.567 0-1.031-.438-1.031-.973v-5.415c.33.107.68.165 1.03.165h12.846v6.223z" fill="currentColor"></path><path d="M15.845 12.573l-1.453 1.371 1.453 1.38 1.464-1.38-1.464-1.37z" fill="currentColor"></path></svg>
    );
    const MarginOrders = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon-menu-sidebar"><path d="M20 5v6.87h-2V8.42L6.42 20 5 18.58 16.58 7h-3.43V5H20z" fill="currentColor"></path><path d="M8.17 5.02c-1.72-.01-3.12 1.39-3.13 3.11-.01 1.72 1.39 3.12 3.11 3.13 1.72.01 3.12-1.39 3.13-3.11v-.02c0-1.72-1.39-3.11-3.11-3.11zm.02 4.24c-.62.01-1.12-.49-1.13-1.11v-.02c0-.61.5-1.11 1.11-1.11.62-.01 1.12.49 1.13 1.11.01.62-.49 1.12-1.11 1.13zM19.09 14.65c-.57-.56-1.34-.9-2.2-.91-1.72 0-3.11 1.39-3.11 3.11s1.39 3.11 3.11 3.11S20 18.57 20 16.85c0-.86-.35-1.64-.91-2.2zm-2.22 3.31c-.61-.01-1.1-.5-1.1-1.11 0-.61.5-1.11 1.11-1.11h.01c.61.01 1.11.51 1.1 1.12-.01.61-.51 1.11-1.12 1.1z" fill="currentColor"></path></svg>
    );
    const MarginODualCurrencyOrderrders = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="icon" className="icon-menu-sidebar"><path d="M3.7 15.3c.1.1.1.3.2.4-.1-.1-.2-.2-.2-.4z" fill="icon"></path><path d="M20.4 11.8c0 4.8-3.9 8.8-8.8 8.8-3.1 0-6-1.7-7.6-4.4-.1-.2-.2-.3-.3-.5.1-.1 0-.2 0-.4-.2-.4-.3-.8-.4-1.2l1.9-.5.3.9c.1.2.2.4.2.5 1.1 2.2 3.4 3.6 6 3.6 3.7 0 6.8-3 6.8-6.8 0-3.7-3-6.8-6.8-6.8V3c4.8.1 8.7 4 8.7 8.8zM3 11.9c0-.8.1-1.5.3-2.3l1.9.5c-.1.6-.2 1.1-.2 1.7l-2 .1zM5.8 8.5l-1.7-1c.4-.7.8-1.3 1.4-1.8l1.4 1.4c-.4.4-.8.9-1.1 1.4zM8.3 6l-1-1.7c.7-.4 1.4-.7 2.1-.9l.5 1.9c-.5.2-1.1.4-1.6.7z" fill="icon"></path><path d="M11 17.5v-1.2c-1.3-.1-2.2-.6-2.8-1.3l1.2-1.1c.5.5 1.1.9 1.8 1v-2.3c-1.9-.4-2.7-1.2-2.7-2.5s.9-2.2 2.5-2.4V6.4h1.5v1.2c1 .1 1.8.5 2.3 1.2l-1.1 1c-.3-.3-.7-.6-1.3-.8v2.1c1.8.4 2.7 1.1 2.7 2.5 0 1.3-.8 2.3-2.5 2.6v1.2H11v.1zm.2-6.6V9c-.7.1-.9.5-.9 1s.3.8.9.9zm1.1 1.9v2c.6-.2.9-.6.9-1.1 0-.3-.1-.7-.9-.9z" fill="icon"></path></svg>
    );
    const EarnHistory = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="icon" className="icon-menu-sidebar"><path d="M3.7 15.3c.1.1.1.3.2.4-.1-.1-.2-.2-.2-.4z" fill="icon"></path><path d="M20.4 11.8c0 4.8-3.9 8.8-8.8 8.8-3.1 0-6-1.7-7.6-4.4-.1-.2-.2-.3-.3-.5.1-.1 0-.2 0-.4-.2-.4-.3-.8-.4-1.2l1.9-.5.3.9c.1.2.2.4.2.5 1.1 2.2 3.4 3.6 6 3.6 3.7 0 6.8-3 6.8-6.8 0-3.7-3-6.8-6.8-6.8V3c4.8.1 8.7 4 8.7 8.8zM3 11.9c0-.8.1-1.5.3-2.3l1.9.5c-.1.6-.2 1.1-.2 1.7l-2 .1zM5.8 8.5l-1.7-1c.4-.7.8-1.3 1.4-1.8l1.4 1.4c-.4.4-.8.9-1.1 1.4zM8.3 6l-1-1.7c.7-.4 1.4-.7 2.1-.9l.5 1.9c-.5.2-1.1.4-1.6.7z" fill="icon"></path><path d="M11 17.5v-1.2c-1.3-.1-2.2-.6-2.8-1.3l1.2-1.1c.5.5 1.1.9 1.8 1v-2.3c-1.9-.4-2.7-1.2-2.7-2.5s.9-2.2 2.5-2.4V6.4h1.5v1.2c1 .1 1.8.5 2.3 1.2l-1.1 1c-.3-.3-.7-.6-1.3-.8v2.1c1.8.4 2.7 1.1 2.7 2.5 0 1.3-.8 2.3-2.5 2.6v1.2H11v.1zm.2-6.6V9c-.7.1-.9.5-.9 1s.3.8.9.9zm1.1 1.9v2c.6-.2.9-.6.9-1.1 0-.3-.1-.7-.9-.9z" fill="icon"></path></svg>
    );
    const LoanHistory = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon-menu-sidebar"><path d="M18.731 13.827a1.741 1.741 0 011.456.518c.68.68.792 1.823.305 2.758-1.266 2.438-4.209 4.667-8.034 4.878-3.062.17-6.148-.807-9.24-2.902l1.008-1.486c2.782 1.887 5.488 2.743 8.133 2.597 3.135-.174 5.547-2.001 6.541-3.914.143-.274.114-.568.018-.664-.041-.04-.182-.026-.581.337-2.667 2.498-6.129 3.072-10.251 1.75l.547-1.71c1.279.41 2.458.612 3.545.607-2.398-1.845-5.124-1.907-8.335-.195L3 14.818c.463-.249.94-.471 1.427-.668a8.242 8.242 0 01-1.005-3.962C3.422 5.667 7.037 2 11.496 2s8.074 3.667 8.074 8.188a8.245 8.245 0 01-.839 3.639zm-12.549-.229c2.97-.666 5.668.126 8.01 2.369 2.14-1.036 3.584-3.257 3.584-5.778 0-3.538-2.817-6.395-6.28-6.395s-6.28 2.858-6.28 6.394c0 1.23.34 2.403.966 3.41z" fill="currentColor"></path><path d="M9.5 9.5l2-2 2 2-2 2-2-2z" fill="currentColor"></path></svg>
    );
    const BuyCryptoHistory = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon-menu-sidebar"><path d="M9.707 12.729h4.5v-2h-4.5v2zM9.707 16.729h4.5v-2h-4.5v2z" fill="currentColor"></path><path d="M13.5 3.3H5.7v17.5h12.5V7.9l-4.7-4.6zm2.7 15.5H7.7V5.3h5v3.5h3.5v10z" fill="currentColor"></path></svg>
    );
    const P2Porder = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon-menu-sidebar"><path d="M8.4 11.6c-1.52 0-2.8-1.28-2.8-2.8C5.6 7.28 6.88 6 8.4 6c1.52 0 2.8 1.28 2.8 2.8 0 1.52-1.28 2.8-2.8 2.8zm0-4c-.64 0-1.2.56-1.2 1.2 0 .64.56 1.2 1.2 1.2.64 0 1.2-.56 1.2-1.2 0-.64-.56-1.2-1.2-1.2zM17.2 13.2H6.8C5.28 13.2 4 14.48 4 16v2.8h16V16c0-1.52-1.28-2.8-2.8-2.8zm-4.88 4H5.6V16c0-.64.56-1.2 1.2-1.2h4.32c.64 0 1.2.56 1.2 1.2v1.2zM15.6 11.6a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z" fill="currentColor"></path></svg>
    );
    
    return (
        <Fragment>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}  defaultSelectedKeys={['3']}>
               
                <SubMenu key="sub1" icon={SVGSpotOrder} title="Spot Order">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Open Orders</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/order-history" className="nav-link">Order History</Link></Menu.Item>
                    <Menu.Item key="3"> <Link to="/trade-history" className="nav-link">Trade History</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="sub10"><Link to="/open-orders" className="nav-link" style={{paddingLeft: "0"}}>{P2Porder}P2P Order</Link></Menu.Item>
                <SubMenu key="sub2" icon={MarginOrders} title="Margin Orders">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Open Orders</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Order History</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/open-orders" className="nav-link">Trade History</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/open-orders" className="nav-link">Fees Return History</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/open-orders" className="nav-link">Borrowing</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/open-orders" className="nav-link">Repayment</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/open-orders" className="nav-link">Transfers</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/open-orders" className="nav-link">Interest</Link></Menu.Item>
                    <Menu.Item key="9"><Link to="/open-orders" className="nav-link">Margin Calls</Link></Menu.Item>
                    <Menu.Item key="10"><Link to="/open-orders" className="nav-link">Liquidation History</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={MarginODualCurrencyOrderrders} title="Dual Currency Order">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Subscription</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Redemption</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={EarnHistory} title="Earn History">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Subscription</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Redemption</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/open-orders" className="nav-link">Interest</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/open-orders" className="nav-link">Launchpool Farming</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/open-orders" className="nav-link">ETH 2.0 Stake History</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="sub5"><Link to="/open-orders" className="nav-link" style={{paddingLeft: "0"}}>{BuyCryptoHistory}Buy Crypto History</Link></Menu.Item>
                <SubMenu key="sub6" icon={LoanHistory} title="Loan History">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Loan Orders</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Repayment History</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/open-orders" className="nav-link">LTV Adjustment History</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/open-orders" className="nav-link">Liquidation History</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/open-orders" className="nav-link">Loan History</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" icon={EarnHistory} title="Locked Staking History">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Subscription</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Redemption</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/open-orders" className="nav-link">Interest</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" icon={EarnHistory} title="Defi Staking History">
                    <Menu.Item key="1"><Link to="/open-orders" className="nav-link">Subscription</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/open-orders" className="nav-link">Redemption</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/open-orders" className="nav-link">Interest</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="sub9"><Link to="/open-orders" className="nav-link" style={{paddingLeft: "0"}}>{EarnHistory}Convert History</Link></Menu.Item>
            </Menu>
        </Fragment>
    )
}

export default Navbar
