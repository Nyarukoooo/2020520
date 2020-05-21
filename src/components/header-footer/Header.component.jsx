import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer.component';


class Header extends Component {
    constructor(){
        super();
        this.state={
            drawerOpen: false,
            headerShow: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen:value
        });
    }
    
    render() {
        return (
            <AppBar 
                position='fixed'
                style={{
                    backgroundColor: this.state.headerShow 
                    ? 'rgb(254, 242, 242, 0.9)'
                    : 'transparent',
                    color: this.state.headerShow
                    ? '#4f4f4f'
                    : 'white',
                    boxShadow: 'none',
                    padding: '10px 0px',
                    transition: 'all 300ms ease-in'
                }}
            >
                <ToolBar>
                    <div className='header_logo'>
                        <div className="font_righteous header_logo_venue">
                            Days before May 20th, 2020
                        </div>
                        <div className="header_logo_title">菲菲 520 快乐！</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer 
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />
                </ToolBar>
            </AppBar>
        )
    }
}

export default Header; 