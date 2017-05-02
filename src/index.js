// import './style/app.css';
//
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import PortfolioHome from './components/sections/PortfolioHome';
import PortfolioSection from './components/sections/PortfolioSection';
import About from './components/sections/About';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory'
import portfolioSections from './data/portfolioSections';

const browserHistory = createBrowserHistory();

// add touch support
injectTapEventPlugin();

const renderSection = (props) => {
    const key = props.match.params.section;
    const portfolioSection = portfolioSections.find((section) => section.key === key);
    return (<PortfolioSection data={portfolioSection} {...props} />);
};

const AppRoot = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Router history={browserHistory}>
                <App>
                    <Route exact path="/" component={PortfolioHome} />
                    <Route exact path="/section/:section" render={props => renderSection(props)} />
                    <Route exact path="/about" component={About} />
                </App>
            </Router>
        </MuiThemeProvider>
    );
};

ReactDOM.render(<AppRoot/>, document.getElementById('appRoot'));