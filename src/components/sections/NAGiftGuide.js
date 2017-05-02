import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const images = [
    'Portfolio_Holiday_0.jpg',
    'Portfolio_Holiday_1.jpg',
    'Portfolio_Holiday_2.jpg',
    'Portfolio_Holiday_3.jpg',
    'Portfolio_Holiday_4.jpg'
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

const NAGiftGuide = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Holiday Gift Guide</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                {renderImages()}
            </Row>
        </Container>
    );
};

export default NAGiftGuide;