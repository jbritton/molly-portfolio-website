import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

class Header extends React.Component {
    constructor(props) {
        super(props);

        // init state
        this.state = {
            dropdownOpen: false,
            routes: routes
        };

        // bind handlers
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    closeDropdown() {
        this.setState({dropdownOpen: false});
    }

    renderDropdownLinks() {
        return this.state.routes.map(({ path, title }, index) => {
            return (
                <Link to={path} key={index}
                      onClick={this.closeDropdown}
                      className="w3-bar-item w3-button w3-text-black">
                    {title}
                </Link>
            );
        });
    }

    render() {
        return (
            <header className="nav-header w3-top">
                <nav className="w3-bar w3-container w3-white">
                    <div className="w3-right">
                        <Link to="/"
                              className="w3-bar-item w3-button">
                            Home
                        </Link>
                        <div className="w3-dropdown-hover">
                            <button className="w3-button">
                                PORTFOLIO <i className="fa fa-caret-down" />
                            </button>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-opacity">
                              {this.renderDropdownLinks()}
                            </div>
                        </div>
                        <Link to="/about"
                              className="w3-bar-item w3-button">
                            ABOUT
                        </Link>
                    </div>
                </nav>
            </header>
        );
    }
};

export default Header;