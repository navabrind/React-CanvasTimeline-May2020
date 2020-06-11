import React, { Component } from 'react';
import { BrowserRouter , Route, Link, Switch } from "react-router-dom";
import HomePage from '../components/homePage';
import TimeLine from '../components/TimeLine/timeLine'

export default class Setup extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/timeLine" component={TimeLine} />
                
            </Switch>
        </BrowserRouter>
        )
    }
}
