import React from 'react'
import {NavLink} from 'react-router-dom';

import './NavigationArrow.css';

const navigationArrow = (props) => (
    <NavLink className={props.class} to={props.link} exact={props.exact}>
        <span></span>
    </NavLink>
)

export default navigationArrow;