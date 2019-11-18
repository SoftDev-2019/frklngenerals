import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../collections-overview/collections.overview.component';
import './shop.styles.scss';


const ShopPage = ({ match }) => {
    console.log(match)
    return (
    <div className='jumbotron collection-page-container'>
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    </div>
);
}




export default ShopPage;