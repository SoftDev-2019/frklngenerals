import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './homepage/homepage.component';
import PlayerDetails from './PlayerDetails';
import SignInAndSignUp from './sign-in-and-sign-up';
import SignUp from './sign-up/sign-up.component';
import { connect } from 'react-redux';
import CheckoutPage from './checkout/checkout.component';
import TeamShopLanding from './teamshoplanding/teamshoplanding.component';
import ShopPage from './shop/shop.component';
import BlogRes from './blogres/blogres.component';
import LandingPageSignUp from './landing-page/landing-page.component';
import SponsorsRes from './sponsorsres/sponsorsres.component';


class Routes extends Component {
    render() {
        const getPlayer = props => {
            let name = props.match.params.lastName;
            let currentPlayer = this.props.players.find(
            player => player.lastName.toLowerCase() === name.toLowerCase()
            );
            return <PlayerDetails {...props} player={currentPlayer} />;
        };
        return(
            <Switch>
                <Route 
                    exact='true'
                    path='/'
                    render={() => this.props.currentUser ? (<HomePage />) : (<LandingPageSignUp />)}
                />
                <Route 
                    exact='true'
                    path='/signin' 
                    render={() => this.props.currentUser ? (<Redirect to='/homepage' />) : (<SignInAndSignUp />)}
                />
                <Route 
                    exact='true' 
                    path='/signup' 
                    render={() => this.props.currentUser ? (<Redirect to='/homepage' />) : (<SignUp />)}
                />
                <Route 
                    exact
                    path='/homepage'
                    render={() => this.props.currentUser ? (<HomePage />) : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/checkout'
                    render={() => this.props.currentUser ? (<CheckoutPage />) : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/teamshop'
                    render={() => this.props.currentUser ? <TeamShopLanding /> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/sponsor'
                    render={() => this.props.currentUser ? <SponsorsRes /> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/blog'
                    render={() => this.props.currentUser ? <BlogRes /> : (<Redirect to='/signin' />)}
                />
                <Route path='/teamshop/shop' component={ShopPage} />
            </Switch>
        )
    }
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Routes);

