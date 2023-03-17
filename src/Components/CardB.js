import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './darkMode.css';
import { Row, Col, Card } from 'react-bootstrap'
import '../App.css'

export default function CardB(props) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`App ${theme}`}>
            <Row >
                <Col>
                    <Card className='radius'>
                        <Card.Body className='bgcard'>
                            <Row>
                                <Col>
                                    <div className='boldme'>{props.page}</div>
                                </Col>
                                <Col>
                                    <div><img src={props.image2} /></div>
                                </Col>
                            </Row>

                            <Row className='mt-5'>
                                <Col>
                                    <div className='tformat'>{props.followers2}</div>
                                </Col>

                                <Col>
                                    <div><img src={props.up2} />{props.percent}</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
