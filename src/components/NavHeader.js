import React from 'react';
import {Link} from 'react-router-dom';
import {portfolioData, DESIGNER_TYPE, DIRECTOR_TYPE} from '../data/portfolioData';

export default class NavHeader extends React.Component {
	constructor(props) {
		super(props);

		// init state
		this.state = {
			dropdownOpen: false
		};

		// bind handlers
		this.closeDropdown = this.closeDropdown.bind(this);
	}

	closeDropdown() {
		this.setState({dropdownOpen: false});
	}

	createDropdownLink(path, index, link) {
		return (
			<Link to={path} key={index}
			      onClick={this.closeDropdown}
			      className="w3-bar-item w3-button w3-text-black">
				{link}
			</Link>
		);
	}

	renderPortfolioLinks(type) {
		const portfolioItems = Object.values(portfolioData).filter(item => (item.type === type));
		const portfolioLinks = portfolioItems.map((value, index) => {
			const {path, link} = value;
			return this.createDropdownLink(path, index, link);
		});
		return portfolioLinks;
	}

	render() {
		return (
			<header className="nav-header w3-top">
				<nav className="w3-bar w3-white">
					<div className="app-content w3-small">
						<div className="w3-right">
							<Link to="/" className="w3-bar-item w3-button">
								Home
							</Link>
							<div className="w3-dropdown-hover">
								<button className="w3-button">
									Creative Direction <i className="fa fa-caret-down"/>
								</button>
								<div className="w3-dropdown-content w3-bar-block w3-card-4">
									{this.renderPortfolioLinks(DIRECTOR_TYPE)}
								</div>
							</div>
							<div className="w3-dropdown-hover">
								<button className="w3-button">
									Design <i className="fa fa-caret-down"/>
								</button>
								<div className="w3-dropdown-content w3-bar-block w3-card-4">
									{this.renderPortfolioLinks(DESIGNER_TYPE)}
								</div>
							</div>
							{/*<Link to="/about" className="w3-bar-item w3-button">*/}
							{/*About*/}
							{/*</Link>*/}
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
