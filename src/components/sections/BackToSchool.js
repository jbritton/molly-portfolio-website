import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const BackToSchool = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Back To School</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}
                     className="grid-item">
                    <img src="assets/full/Portfolio_iPhone_Backpacks.png"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Backpacks_1.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Backpacks_2.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Backpacks_3.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src="assets/full/Portfolio_Backpacks_4.jpg"
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default BackToSchool;