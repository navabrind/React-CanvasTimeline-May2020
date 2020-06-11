import React, { Component } from 'react';
// import zoomIn from '../zoom/zoomIn'

import { Link } from 'react-router-dom';
import './navbarStyles.css';
import Logo from '../../images/logo_header.png';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            name: 'sai',
            isVisible: true,
        }
    }
    onChange = () => {
        console.log('sasaasa')
    }
    onSearch = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        return (
            <div>
                <nav className=" navbar-expand-lg navbar-light bg-ligh nav-bar1 nav-bar-bottom">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-bran" href="/"><img className="img-Style" src={Logo} /></a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item icon-left">
                                <a className="nav-link disabled" ><i className="fa fa-undo icon-size"></i> </a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link disabled" href="#"><i className="fa fa-repeat icon-size"></i> </a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " data-toggle="tooltip" data-placement="bottom" title="ZoomIn"><i className="fa fa-search-plus icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="ZoomOut" href="/temp"><i className="fa fa-search-minus icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " data-toggle="tooltip" data-placement="bottom" title="Reset"><i className="fa fa-bullseye icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " data-toggle="tooltip" data-placement="bottom" title="Properties"><i className="fa fa-cog icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " data-toggle="tooltip" data-placement="bottom" title="Boxwidth"><i className="fa fa-arrows-h icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left dropdown map-bg-color">
                                <a className="nav-link " href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-sitemap Text-Color1"></i>
                                    <span className="Text-Color">MAP</span></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">MAP View</a>
                                    <a className="dropdown-item" href="/timeLine">TimeLine View</a>
                                    <a className="dropdown-item" href="/">OUTLINE View</a>
                                </div>
                            </li>

                        </ul>
                        <ul className="navbar-nav  mt-2 mt-lg-0">
                            <li className="nav-item icon-right">
                                <a className=" " href="#"><i className="fa fa-floppy-o icon-size text-color"></i><span className="text-color">SAVE</span></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " href="#"><i className="fa fa-share-square-o icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link " href="#"><i className="fa fa-twitter icon-size"></i></a>
                            </li>
                            <li className="nav-item icon-left">
                                <a className="nav-link "><i className="fa fa-bars icon-size" onClick={this.onSearch}></i></a>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
