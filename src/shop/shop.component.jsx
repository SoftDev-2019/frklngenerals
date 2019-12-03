import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../collections-overview/collections.overview.component';
import './shop.styles.scss';
import { connect } from 'react-redux';
import { updateCollections } from '../redux/shop/shop.actions';
import WithSpinner from '../with-spinner/with-spinner.component';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        }
      }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
    
        this.unsubscriveFromSnapshot = collectionRef.onSnapshot(async snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          this.setState({loading: false});
        });
      }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='container-fluid shop-page-collection-container'>
                <div className='shop-page-collection-container-route'>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
      dispatch(updateCollections(collectionsMap))
  });
  
  export default connect(null, mapDispatchToProps)(ShopPage);