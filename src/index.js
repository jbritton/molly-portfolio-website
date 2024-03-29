import './style/app-style';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

const AppRoot = () => {
    return (
        <HashRouter>
            <App/>
        </HashRouter>
    );
};

ReactDOM.render(<AppRoot/>, document.getElementById('appRoot'));