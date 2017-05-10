import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <hr/>
                        <span className="centered">&copy; 2017 Molly Britton</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;