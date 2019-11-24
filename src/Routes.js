import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TeamInfo from './team-info/team-info.component';
import Roster from './Roster';
import Blog from './Blog';
import Sponsor from './sponsor/Sponsor.component';
import Home from './Home';
import PlayerDetails from './PlayerDetails';
import LandingPage from './LandingPage';
import SignInAndSignUp from './sign-in-and-sign-up';
import SignUp from './sign-up/sign-up.component';
import { connect } from 'react-redux';
import CheckoutPage from './checkout/checkout.component';
import TeamShopLanding from './teamshoplanding/teamshoplanding.component';
import ShopPage from './shop/shop.component';
import BlogResponsive from './blog_responsive/blog_responsive.component';
import TestBed from './test_bed/test_bed.component';
import LandingPageSignUp from './landing-page/landing-page.component';



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
                    render={() => this.props.currentUser ? (<Home/>) : (<LandingPageSignUp />)}
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
                    render={() => this.props.currentUser ? (<Home />) : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/checkout'
                    render={() => this.props.currentUser ? (<CheckoutPage />) : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/roster'
                    render={() => this.props.currentUser ? <Roster players={this.props.players}/> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/teaminfo'
                    render={() => this.props.currentUser ? <TeamInfo /> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/teamshop'
                    render={() => this.props.currentUser ? <TeamShopLanding /> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/sponsor'
                    render={() => this.props.currentUser ? <Sponsor /> : (<Redirect to='/signin' />)}
                />
                <Route 
                    exact='true'
                    path='/blog'
                    render={() => this.props.currentUser ? <BlogResponsive /> : (<Redirect to='/signin' />)}
                />
                  <Route 
                    exact='true'
                    path='/test'
                    component={TestBed}
                />
                <Route 
                    exact='true'
                    path='/roster/:lastName'
                    render={getPlayer}
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

