import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/App/Header/Header";
import Sidebar from "./components/App/Sidebar/Sidebar";
import Footer from "./components/App/Footer/Footer";
import Master from "./components/App/Master/Master";
import Navbar from "./components/App/Navbar/Navbar";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import TradeHistory from "./components/Page/TradeHistory/TradeHistory";
import TradeManager from "./containers/Trade/DesktopView";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <div className="main">
            <div className="sidebars">
              <Sidebar />
            </div>
            <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/trade-history" />
                </Route>
                <Route exact path="/trade-history" component={TradeManager} />
              </Switch>
            </div>
          </div>
          <footer id="footer">
            <Footer />
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
