import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import Merch from './Merch.js'
import Collective from './Collective.js'
import Navigation from './Navigation.js'
import Gallery from './Gallery.js'
import Footer from './Footer.js'
import AuthService from '../services/AuthService'

const Auth = new AuthService()

const Content = () => (
    <div style={{backgroundcolor: "#10011d"}}>
        <Navigation />
    {Auth.loggedIn() ?
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/collective' component={Collective}/>
                    <Route exact path='/merch' component={Merch}/>
                    <Route exact path='/photos' component={Gallery} />
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
                    <Route exact path='/merch' component={Merch}/>
                    <Route exact path='/photos' component={Gallery} />
                    <Redirect from="/admin" to="/"/>
                </Switch>
            </Router>
    }
    <Footer />
    </div>
)

export default Content;
