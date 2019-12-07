import React from 'react';
import { connect } from 'react-redux'
import { selectCollection } from '../redux/shop/shop.selectors';
import './collection.styles.scss';

import CollectionItem from '../collection-items/collection-items.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className='collection-page-container'>
        <h2 className='collection-page-container-title'>{ title }</h2>
        <div className='collection-page-container-items'>
            {
                items.map(item => (<CollectionItem key={item.id} item={item} />)
            )};
        </div>
    </div>   
)};



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);