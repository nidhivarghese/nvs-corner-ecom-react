import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
    <Link to={`${linkUrl}`} 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} menu-item`}
    >
        <div className='background-image'
        style={{ 
            backgroundImage: `url(${imageUrl})`
        }}
        ></div>
        
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP</span>
        </div>
    </Link>
);

export default MenuItem;