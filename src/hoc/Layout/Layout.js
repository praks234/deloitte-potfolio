import React, { Component } from 'react';

import Container from '../ContainerElement/containerElement';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHadler =() => {
        this.setState((prevState, props) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    sideDrawerClosedHadler = () => {
        this.setState({showSideDrawer:false});
    }
    render () {
        return (
            <Container>
                <Toolbar
                    open={this.sideDrawerToggleHadler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHadler} />
                <main className = "Content">
                    {this.props.children}
                </main>
                <div></div>
            </Container>
        )
    }
};

export default Layout;