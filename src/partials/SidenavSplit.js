import React, { Component } from 'react';
import './Sidenav.css';
import { CgMenuRound } from 'react-icons/cg';

export default class SidenavSplit extends Component {
    render() {
        return (
            <div className="left-sidebar">
                <div className="menu-section">

                </div>
                <div className="home-button">
                    <a className="home-button-link">
                        <CgMenuRound/>
                    </a>
                </div>
            </div>
        )
    }
}
