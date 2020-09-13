import React, {Component} from 'react';
import logo from '../../images/amazon-logo.png'
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className="header-wrapper">
                <div className="header-top">
                    <img className="header-top-logo" src={logo}></img>
                    
                    <div className="header-top-search">
                        <div className="search-category">Cat</div>
                        <input className="search-input"type="text"></input>
                        <div className="search-icon">Search</div>
                    </div>

                    <div className="header-section-wrapper">
                        <div className="header-language">Lang</div>
                        <div className="header-section">
                            <div className="section-top">Hello, Tyler</div>
                            <div className="section-bottom">{`Accounts & Lists`}</div>
                        </div>
                        <div className="header-section">
                            <div className="section-top">Returns</div>
                            <div className="section-bottom">{`& Orders`}</div>
                        </div>
                        <div className="header-section">
                        <div className="section-top"></div>
                            <div className="section-bottom section-alone">Prime</div>
                        </div>
                        <div className="header-section">
                            <div className="section-top"></div>
                            <div className="section-bottom section-alone">Cart</div>
                        </div>

                    </div>
                    

                </div>
                <div className="header-bottom">
                    Bottom part of the header
                </div>
            </div>
        )
    }
}

export default Header