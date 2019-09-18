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
			designDropdownOpen: false,
			directionDropdownOpen: false
		};

		// bind handlers
		this.toggleDesignDropdown = this.toggleDesignDropdown.bind(this);
		this.toggleDirectionDropdown = this.toggleDirectionDropdown.bind(this);
		this.closeAllDropdowns = this.closeAllDropdowns.bind(this);

	}

	toggleDesignDropdown(){
		console.log('toggleDesignDropdown');
		const designDropdownOpen = !this.state.designDropdownOpen;
		this.setState({ designDropdownOpen });
	}

	toggleDirectionDropdown(){
		console.log('toggleDirectionDropdown');
		const directionDropdownOpen = !this.state.directionDropdownOpen;
		this.setState({ directionDropdownOpen });
	}

	closeAllDropdowns() {
		this.setState({
			designDropdownOpen: false,
			directionDropdownOpen: false
		});
	}

	createDropdownLink(path, index, link) {
		return (
			<Link to={path} key={index}
			      onClick={this.closeAllDropdowns}
			      className="w3-bar-item w3-button">
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
		const { designDropdownOpen, directionDropdownOpen } = this.state;

		const designDropdownStyle = (designDropdownOpen)?
			'w3-dropdown-content w3-bar-block w3-card-4 w3-show' : 'w3-dropdown-content w3-bar-block w3-card-4';

		const directionDropdownStyle = (directionDropdownOpen)?
			'w3-dropdown-content w3-bar-block w3-card-4 w3-show' : 'w3-dropdown-content w3-bar-block w3-card-4';

		return (
			<header className="nav-header w3-top">
				<nav className="nav-bar">
					<Link to="/" className="w3-button">
						Home
					</Link>
					<div className="w3-dropdown-click">
						<button className="w3-button"
						        onClick={this.toggleDirectionDropdown}>
							Creative Direction <i className="fa fa-caret-down"/>
						</button>
						<div className={directionDropdownStyle}>
							{this.renderPortfolioLinks(DIRECTOR_TYPE)}
						</div>
					</div>
					<div className="w3-dropdown-click">
						<button className="w3-button"
						        onClick={this.toggleDesignDropdown}>
							Design <i className="fa fa-caret-down"/>
						</button>
						<div className={designDropdownStyle}>
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
