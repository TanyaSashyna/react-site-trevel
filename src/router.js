import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from './components/main/Main';
import Count from "./containers/Count";
import Intercity from './components/intercity/Intercity';
import UserProfile from './components/userProfile/UserProfile';
import SettingPage from './components/settingPage/SettingPage';

export default class App extends React.Component {
  render() {
    return (
        <>
            <Switch>
                <Route path="/counter" component={Count} />
                <Route exact path="/" component={Main} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/settings" component={SettingPage} />
                <Route path="/transfer" component={Intercity} />
                <Route
                    path="/taxi"
                    render={props => <div className="main"><h1>Taxi Page</h1></div>}
                />
                <Route
                    path="/history"
                    render={props => <div className="main"><h1>History Page</h1></div>}
                />
                <Route
                    path="/sale"
                    render={props => <div className="main"><h1>Sale Page</h1></div>}
                />
                <Route
                    path="/contact"
                    render={props => <div className="main"><h1>Contact Page</h1></div>}
                />
            </Switch>
        </>
    )
  }
}
