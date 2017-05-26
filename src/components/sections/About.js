import React from 'react';

const About = () => {
    return (
        <section className="w3-content">
          <div className="w3-row-padding">
            <div className="w3-col s4">
              <ul className="w3-ul w3-border">
                <li>
                  <a className="w3-bar-item">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="w3-bar-item">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="w3-bar-item">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="w3-col s8">
              <p>
                A description.  Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
    );
};

export default About;
