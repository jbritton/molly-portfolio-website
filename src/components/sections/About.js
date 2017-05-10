import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h4 className="centered">About Me</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4} md={4} lg={4}>
                    Contact Info
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                    Main Content
                </Col>
            </Row>
        </Container>
    );
};

export default About;
