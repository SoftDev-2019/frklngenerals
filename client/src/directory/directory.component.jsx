import React from 'react';
import MenuItem from '../menu-item';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
   <div className='container-fluid directory-menu-items-container'>
      {sections.map( ({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
);

const mapStateToProps =createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
