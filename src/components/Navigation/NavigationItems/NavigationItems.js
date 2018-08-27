import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/portfolio" >Portfolio</NavigationItem>
           
        </ul>
    )
}

export default navigationItems;