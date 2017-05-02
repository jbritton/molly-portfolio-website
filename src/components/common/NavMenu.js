import React from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import portfolioSections from '../../data/portfolioSections';

export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false, portfolioSections};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    renderSectionLinks() {
        return this.state.portfolioSections.map(({ title, key }) => {
            return(
                <Link to={`/section/${key}`} key={key}>
                    <MenuItem primaryText={title} onTouchTap={this.handleClose.bind(this)} />
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <IconButton
                    onTouchTap={this.handleToggle.bind(this)}>
                    <FontIcon className="material-icons">menu</FontIcon>
                </IconButton>
                <Drawer open={this.state.open}
                        docked={false}
                        onRequestChange={(open) => this.setState({open})}>
                    <Menu>
                        <Link to='/about'>
                            <MenuItem primaryText="About Me" onTouchTap={this.handleClose.bind(this)} />
                        </Link>
                        <Divider/>

                        <Link to='/'>
                            <MenuItem primaryText="Portfolio" onTouchTap={this.handleClose.bind(this)} />
                        </Link>

                        {this.renderSectionLinks()}
                    </Menu>
                </Drawer>
            </div>
        );
    }
}
