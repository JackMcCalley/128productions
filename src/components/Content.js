import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import Merch from './Merch.js'
import Collective from './Collective.js'
import Navigation from './Navigation.js'
import Gallery from './Gallery.js'
import Footer from './Footer.js'
import Cart from './shopify/Cart.js';
import ProductPage from './ProductPage.js';
import Team from './Team.js'
import backgroundimg from '../css/backgroundimg.svg'


const Content = () => (
    <div>
    <div style={{
            backgroundImage: `url(${backgroundimg})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed', 
        }}>
        <Router>
            <Navigation />
            <Cart />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/collective' component={Collective}/>
                <Route exact path='/merch' component={Merch}/>
                <Route exact path='/photos' component={Gallery} />
                <Route exact path='/product/:id' component={ProductPage} />
                <Route exact path='/team' component={Team} />
            </Switch>
        </Router>
        
    </div>
    <div>
        <Footer />
    </div>
    </div>
)

export default Content;
