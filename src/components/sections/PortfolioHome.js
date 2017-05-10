import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import routes from '../../routes';


const renderThumbs = () => {
    return routes.map(({ title, path, thumb }, index) => {
        return (
            <Col key={index}
                 xs={12} sm={6} md={4} lg={4}
                 className="grid-item">
                <Link to={path} className="section-link">
                    <div className="image-container">
                        <img src={`assets/thumbs/${thumb}`}
                             className="image img-fluid img-responsive" />
                        <div className="middle">
                            <div className="text">{title}</div>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    });
};

const PortfolioHome = () => {
    return (
        <Container>
            <Row>
                <Col xs={{offset: 4, size: 4}}>
                    <img src="assets/logo.png" className="img-fluid img-responsive" />
                </Col>
            </Row>
            <Row>
                {renderThumbs()}
            </Row>
        </Container>
    );
};

export default PortfolioHome;




