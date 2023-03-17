import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './darkMode.css';
import { Row, Col, Card } from 'react-bootstrap'


export default function CardC(props) {
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
                                    <div>{props.toggleTheme}</div>
                                    <div><img src={props.image} />{props.name}</div>
                                    <div><h1 className='boldme'>{props.followers}</h1></div>
                                    <div>{props.fol}</div>
                                    <div className='today'><img src={props.up} />{props.amount}</div>
                                    <div>{props.page}<img src={props.image2} /></div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
