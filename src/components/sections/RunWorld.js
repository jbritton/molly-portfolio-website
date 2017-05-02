import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const RunWorld = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">EU Gift Guide</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12}
                     className="grid-item">
                    <img src="assets/full/Portfolio_iPhone_Run.png"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Run_1.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Run_2.jpg"
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default RunWorld;