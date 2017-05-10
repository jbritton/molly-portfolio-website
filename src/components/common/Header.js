import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

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
            <header className="w3-top">
                <div className="w3-bar w3-black">
                    <Link to="/"
                          className="w3-bar-item w3-button w3-black">
                        Home
                    </Link>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">
                            Portfolio <i className="fa fa-caret-down w3-text-white" />
                        </button>
                        <div className="w3-dropdown-content w3-bar-block w3-white w3-card-4">
                            {this.renderDropdownLinks()}
                        </div>
                    </div>
                    <Link to="/about"
                          className="w3-bar-item w3-button w3-black">
                        About
                    </Link>
                </div>
            </header>
        );
    }
};

export default Header;