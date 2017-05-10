import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Uniforms = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Uniforms</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="grid-item">
                    <img src="assets/full/Portfolio_iPhone_Uniforms.png"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} className="grid-item">
                    <img src="assets/full/Portfolio_Uniforms.jpg"
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default Uniforms;