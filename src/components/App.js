import React from 'react';
import NavMenu from './common/NavMenu';
import Footer from './common/Footer';


const App = ({ children }) => {
    return (
        <div>
            <NavMenu/>
            <section>
                {children}
            </section>
            <Footer/>
        </div>
    );
};

export default App;