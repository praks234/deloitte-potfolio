import React from 'react';

import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Container from '../../../hoc/ContainerElement/containerElement';

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Container>
      <BackDrop
        show={props.open}
        clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Container>
  )
};

export default sideDrawer;
