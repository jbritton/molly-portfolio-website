import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const images = [
    'Portfolio_Brazil_Innovation_1.jpg',
    'Portfolio_Brazil_Innovation_2.jpg',
    'Portfolio_Brazil_Innovation_3.jpg',
    'Portfolio_Brazil_Innovation_4.jpg'
];

const renderImages = () => {
    return images.map((image, index) => {
        return (
            <Col key={index}
                 xs={12} sm={12} md={6} lg={6}
                 className="grid-item">
                <img src={`assets/full/${image}`}
                     className="img-fluid img-responsive" />
            </Col>
        );
    });
};

const BrazilInnovation = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Brazil Innovation Pages Design, 2014</h4>
                    <h6 className="centered">Lead UX and Visual Designer (Live Text Designed with Parallax)</h6>
                </Col>
            </Row>
            <Row>
                {renderImages()}
            </Row>
        </Container>
    );
};

export default BrazilInnovation;