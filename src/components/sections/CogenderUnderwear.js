import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CogenderUnderwear = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Underwear Project</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_1.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_2.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_3.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_4.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_5.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_6.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_Email_1.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}
                     className="grid-item">
                    <img src={`assets/full/Portfolio_Underwear_Email_2.jpg`}
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default CogenderUnderwear;