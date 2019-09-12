import React from 'react';
import {Link} from 'react-router-dom';
import {portfolioData, DESIGNER_TYPE, DIRECTOR_TYPE} from '../data/portfolioData';


function compareByProp(x1, x2, prop){
	const prop1 = x1[prop];
	const prop2 = x2[prop];
	if(prop1 < prop2){
		return -1;
	}else if(prop1 > prop2){
		return 1;
	}else{
		return 0;
	}
}


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
			      className="w3-bar-item w3-button w3-text-black w3-hover-text-blue w3-hover-none">
				{link}
			</Link>
		);
	}

	renderPortfolioLinks(type) {
		const portfolioItems = Object.values(portfolioData)
			.filter(item => (item.type === type))
			.sort((x1, x2) => compareByProp(x1, x2, 'link'));
		const portfolioLinks = portfolioItems.map((value, index) => {
			const {path, link} = value;
			return this.createDropdownLink(path, index, link);
		});
		return portfolioLinks;
	}

	render() {
		return (
			<header className="nav-header w3-top">
				<nav className="nav-bar w3-card-2">
					<Link to="/" className="w3-button w3-hover-text-blue w3-hover-none">
						Home
					</Link>
					<div className="w3-dropdown-hover w3-hover-text-blue w3-hover-none">
						<button className="w3-button w3-hover-text-blue w3-hover-none">
							Creative Direction <i className="fa fa-caret-down"/>
						</button>
						<div className="w3-dropdown-content w3-bar-block w3-card-4">
							{this.renderPortfolioLinks(DIRECTOR_TYPE)}
						</div>
					</div>
					<div className="w3-dropdown-hover w3-hover-text-blue w3-hover-none">
						<button className="w3-button w3-hover-text-blue w3-hover-none">
							Design <i className="fa fa-caret-down"/>
						</button>
						<div className="w3-dropdown-content w3-bar-block w3-card-4">
							{this.renderPortfolioLinks(DESIGNER_TYPE)}
						</div>
					</div>
					{/*<Link to="/about" className="w3-bar-item w3-button">*/}
					{/*About*/}
					{/*</Link>*/}
				</nav>
			</header>
		);
	}
}
