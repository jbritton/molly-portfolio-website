import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PostPurchase = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">Post Purchase</h4>
                    <h6 className="centered">LOREM IPSUM</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12}
                     className="grid-item">
                    <img src="assets/full/Portfolio_iPhone_PostPurchase.png"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_2.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_3.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_4.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_5.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_6.jpg"
                         className="img-fluid img-responsive" />
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}
                     className="grid-item">
                    <img src="assets/full/Portfolio_PostPurchase_1.jpg"
                         className="img-fluid img-responsive" />
                </Col>
            </Row>
        </Container>
    );
};

export default PostPurchase;