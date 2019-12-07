import React from 'react';
import './TeamShop.scss'
import MenuItem from '../menu-item';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectTeamShopSections } from '../redux/team-shop/team-shop.selectors';


const TeamShop = ({ sections }) => (
            <div className='teamshop-menu'>
                {
                    sections.map( ({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ) )
                }
            </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectTeamShopSections
})

export default connect(mapStateToProps)(TeamShop);