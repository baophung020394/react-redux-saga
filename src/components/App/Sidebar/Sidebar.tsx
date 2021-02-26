import React, { Fragment } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Sidebar() {
    return (
       <Fragment>
           <Navbar />
       </Fragment>
    )
}

export default Sidebar
