import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import Merch from './Merch.js'
import Tickets from './Tickets.js'
import Collective from './Collective.js'
import Navigation from './Navigation.js'
import Gallery from './Gallery.js'
import AuthService from '../services/AuthService'

const Auth = new AuthService()

const Content = () => (
    <div>
        <Navigation />
    {Auth.loggedIn() ?
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/collective' component={Collective}/>
                    <Route exact path='/tickets' component={Tickets}/>
                    <Route exact path='/merch' component={Merch}/>
                    <Route exact path='/gallery' component={Gallery} />
                    <Redirect from="/login" to="/account" />
                    <Redirect from="/admin" to="/" />
                </Switch>
            </Router>
            :
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/collective' component={Collective}/>
                    <Route exact path='/tickets' component={Tickets}/>
                    <Route exact path='/merch' component={Merch}/>
                    <Route exact path='/gallery' component={Gallery} />
                    <Redirect from="/account" to="/login" />
                    <Redirect from="/admin" to="/"/>
                </Switch>
            </Router>
    }
    </div>
)

export default Content;
