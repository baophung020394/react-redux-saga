import React, { Fragment, useEffect, useReducer, useState } from 'react'
import { Table, Tag, Space } from 'antd';
import classNames from 'classnames';
import { DateRangePicker } from 'rsuite';
import isAfter from 'date-fns/isAfter';
import 'rsuite/dist/styles/rsuite-default.css';
import { startOfDay, endOfDay, addDays, subDays, endOfWeek, startOfWeek } from 'date-fns';
import axios from 'axios';
import  moment from 'moment';

const initialState = {
    loading: true,
    error: '',
    tradeHistory: []
}
const reducer = (state:any, action:any) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                tradeHistory: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                tradeHistory: [],
                error: 'Something went wrong!'
            }
        default: 
            return state;
    }
} 
function TradeHistory() {    
    const [activeFrom, setActiveFrom] = useState(false);
    const [activeTo, setActiveTo] = useState(false);
    const [activeSide, setActiveSide] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');
    // const [tradeHistory, setTradeHistory] = useState([]);
    const [side, setSide] = useState('')
    const sides = ['Buy', 'Sell'];
    const [state, dispatch] = useReducer(reducer, initialState);
    const instance = (
        <div>
            <label htmlFor="Date">Date</label>
            <DateRangePicker disabledDate={date => isAfter(date, new Date())} 
            defaultValue={[new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) , new Date()]} />
        </div>
    );

    const columns = [
        {
          title: 'Date',
          dataIndex: 'time',
          key: 'time',
          render: (time:any) => `${moment(time).format('YYYY-MM-DD h:mm:ss')}`
        },
        {
          title: 'Pair',
          dataIndex: 'symbol',
          key: 'symbol',
          render: (symbol:any) => `${symbol}`
        },
        {
          title: 'Side',
          dataIndex: 'side',
          key: 'side',
          render: (side:any) => {
            let cl = side === 'Buy' ? 'green' : 'red';
            return (
                <Tag color={cl} key={side}>
                    {side}
                </Tag>
            )
          }
          
        },
        {
            title:'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title:'Filled',
            dataIndex: 'qty',
            key: 'qty',
            render: (qty: any) => `${qty}`
        },
        {
            title:'Fee',
            dataIndex: 'fee',
            key: 'fee',
            render: (fee:any) => `${fee}`,
            width: "2%",
            className: "fee"
        },
        {
            title:'',
            dataIndex: 'feeAsset',
            key: 'feeAsset',
            render: (feeAsset:any) => `${feeAsset}`,
            className: "feeAsset"
        },
        {
            title:'Total',
            dataIndex: 'totalQuota',
            key: 'totalQuota'
        }
      ];
      
    const dataPairFrom = (
        <ul className="list-pair">
            <li className="check">
                All
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="primary" className="checked"><path d="M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z" fill="primary"></path></svg>
            </li>
            <li>
                1INCH
            </li>
            
            <li>
                AAVE
            </li>
            <li>
                AAVEDOWN
            </li>
            <li>
                AAVEUP
            </li>
            <li>
                ADADOWN
            </li>
            <li>
                ADAUP
            </li>
            <li>
                ADD
            </li>
            <li>
                ADX
            </li>
            <li>
                ADXOLD
            </li>
        </ul>
    );

    const dataPairTo = (
        <ul className="list-pair">
            <li className="check">
                All
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="primary" className="checked"><path d="M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z" fill="primary"></path></svg>
            </li>
            <li>
                BTC
            </li>
            
            <li>
                ETH
            </li>
            <li>
                USTD
            </li>
            <li>
                BND
            </li>
            <li>
                BUSD
            </li>
            <li>
                EUR
            </li>
            <li>
                TUSD
            </li>
            <li>
                TRY
            </li>
            <li>
                PAX
            </li>
        </ul>
    );
    const dataSide = (
        <ul className="list-pair">
            <li className="check">
                All
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="primary" className="checked"><path d="M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z" fill="primary"></path></svg>
               
            </li>
            {
                sides.map(el => (
                    <li onClick={() => handleClick(el)}>
                        {el}
                    </li>
                ))
            }
            
           
        </ul>
    );

    const buttonReset = (
        <button className="reset-btn">Reset</button>
    )

    const buttonSearch = (
        <button className="search-btn" onClick={() => submit()}>Search</button>
    );
    // Handle Click filter
    const handleClick = (el:any) => {
        setSide(el);
    }
    // Search onSubmit
    const submit = () => {
        const results = state.tradeHistory.filter((trade:any) =>
       { 
           console.log(side.toLowerCase())
            return trade.side.toLowerCase().includes(side.toLowerCase())}
        );
        dispatch({type: 'FETCH_SUCCESS', payload: results})
        console.log(results);
    }
    // Fetch Data
    const customFetch = async (params = {}) => {
        
        axios.get('data.json')
        .then(res => {
           dispatch({type: 'FETCH_SUCCESS', payload: res.data.data});
        })
        .catch(err=> {
            dispatch({type: 'FETCH_ERROR'});
        })
    };

    useEffect(() => {
        customFetch({});
    }, [])

    return (
        <Fragment>
            <div className="trade-history-container">
                <h1>Trade History</h1>
                <div className="filter">
                    <div className="left">
                        {/* DatePicker */}
                        <div className="pair">
                            {instance}
                        </div>
                        <div className="pair">
                            <label htmlFor="Pair">Pair</label>
                            <div className="groups-pair">
                                <div className={`btn-input ${activeFrom ? "active-from" : ""}`} onClick={() => setActiveFrom(!activeFrom)}>
                                    <span>All</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" role="icon" className="arrow"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                                    { activeFrom ? dataPairFrom : null }
                                </div>
                                <span className="line">-</span>
                                <div className={`btn-input ${activeTo ? "active-to" : ""}`} onClick={() => setActiveTo(!activeTo)}>
                                    <span>All</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" role="icon" className="arrow"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                                    { activeTo ? dataPairTo : null}
                                </div>
                            </div>
                        </div>
                        {/* End Pair */}
                        <div className="pair side">
                            <label htmlFor="Pair">Side</label>
                            <div className="groups-pair">
                                <div className={`btn-input ${activeSide ? "activeSide" : ""}`} onClick={() =>  setActiveSide(!activeSide)}>
                                    <span>
                                        {
                                            side ? side : 'All'
                                        }
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" role="icon" className="arrow"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                                    { activeSide ? dataSide : null}
                                </div>
                            </div>
                        </div>
                        <div className="pair">
                            
                            <div className="groups-button">
                                {buttonReset}
                                {buttonSearch}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="export">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-export"><path d="M14.01 2v6h-1.7V4.91l-6.17 6.16-1.21-1.2L11.1 3.7H8V2h6.01z" fill="currentColor"></path><path d="M12.31 10.001v2.3h-8.6v-8.6h2.294v-1.7H2.01v12h12v-4h-1.7z" fill="currentColor"></path></svg>
                            <span>Generate All Trade Statements</span>
                        </div>
                        <div className="export">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-export"><path d="M14.01 2v6h-1.7V4.91l-6.17 6.16-1.21-1.2L11.1 3.7H8V2h6.01z" fill="currentColor"></path><path d="M12.31 10.001v2.3h-8.6v-8.6h2.294v-1.7H2.01v12h12v-4h-1.7z" fill="currentColor"></path></svg>
                            <span>Export Recent Trade History</span>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </Fragment>
    )
}

export default TradeHistory
