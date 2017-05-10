import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink,
    NavDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import routes from '../../routes';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            routes: routes
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    renderSectionLinks() {
        return this.state.routes.map(({ path, title }, index) => {
            return (
                <Link to={path} key={index}
                      onClick={this.toggle}
                      className="dropdown-item">
                    {title}
                </Link>
            );
        });
    }

    render() {
        return (
            <Nav className="centered">
                {/*<NavItem>*/}
                    {/*<Link to="/" className="nav-link">Home</Link>*/}
                {/*</NavItem>*/}
                <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>
                        Portfolio
                    </DropdownToggle>
                    <DropdownMenu>
                        <Link to="/"
                              onClick={this.toggle}
                              className="dropdown-item">
                            Portfolio Home
                        </Link>
                        <DropdownItem divider />
                        <DropdownItem header>Portfolio Sections</DropdownItem>
                        { this.renderSectionLinks() }
                    </DropdownMenu>
                </NavDropdown>
                <NavItem>
                    <Link to="/about" className="nav-link">About Me</Link>
                </NavItem>
            </Nav>
        );
    }

};

export default NavMenu;