import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.components';


const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherDirectoryItems }) => (
        <MenuItem key={id} {...otherDirectoryItems} />
    ))}
  </div>
)
  

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);