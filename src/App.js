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
              } else {setCurrentUser(userAuth)};
      });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='App'>
               <HeaderResponsive />
               <Routes players={this.props.players} />
               <Footer />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
