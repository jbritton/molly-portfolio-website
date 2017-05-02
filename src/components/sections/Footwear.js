import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footwear = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Footwear</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12}
                     className="grid-item">
                    <img src="assets/full/Portfolio_iPhone_spectrum.png"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Spectrum_1.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Spectrum_2.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Spectrum_3.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Spectrum_Email.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Spectrum_Gemini_Email.jpg"
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default Footwear;