import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/home/Home';
import About from './components/about/About';
import Transfer from './components/transfer/Transfer';
import Contact from './components/contact/Contact';


export default class App extends React.Component {
  render() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/transfer" component={Transfer} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    )
  }
}
