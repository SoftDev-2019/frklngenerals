import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Routes from './Routes';
import playersData from './players.data.js';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HeaderResponsive from './header-responsive/header-responsive.component';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Footer from './footer/footer.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import HamburgerNavBar from './hamburger-navbar/hamburger-navbar.component'
import NavBarLarge from './navbar/navbar.component';
import HamburgerTemp from './hamburger-navbar/hamburger-temp.component'

class App extends Component {
    static defaultProps = {
        players: playersData
    };
    
    unsubscribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
           if (userAuth) {
             const userRef = await createUserProfileDocument(userAuth);
             userRef.onSnapshot(snapShot => {
               setCurrentUser({
                   id: snapShot.id,
                   ...snapShot.data()
                 });
               });
              } 
                setCurrentUser(userAuth);
      });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='App'>
              <div className='container-fluid navbar-large-container'>
                <div className='row navbar-large-container-row'>
                  <div className='col-12 d-none d-md-inline navbar-large-container-row-col'>
                    <NavBarLarge />
                  </div>
                  <div className='col-12 d-md-none navbar-small-container-row-col'>
                    <HamburgerTemp />
                  </div>
                </div>
              </div>
               <HeaderResponsive />
               <Routes players={this.props.players} />
               <Footer />
          </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
