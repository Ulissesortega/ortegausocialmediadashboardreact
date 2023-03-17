import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './darkMode.css';
import { Container, Row, Col } from 'react-bootstrap'
import facebook from '../Assets/icon-facebook.svg'
import twitter from '../Assets/icon-twitter.svg'
import instagram from '../Assets/icon-instagram.svg'
import youtube from '../Assets/icon-youtube.svg'
import up from '../Assets/icon-up.svg'
import down from '../Assets/icon-down.svg'
import CardC from '../Components/Card'
import CardB from './CardB';
import Switch from './Switch';

export default function Dashboard() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            console.log("theme is now dark")
        } else {
            setTheme('light');
            console.log("light")
        }
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col className=''>
                        <h1 className='d-flex justify-content-start'>Social Media Dashboard</h1>
                        <p className='d-flex justify-content-start'>Total Followers: 23,004</p>
                    </Col>

                    <Col className='d-flex justify-content-end'>
                        <p>Swicth</p><Switch onClick={toggleTheme} />
                    </Col>
                </Row>


                <Row>

                    <Col>
                        <CardC
                            className={toggleTheme}
                            image={facebook}
                            name="@NathanF"
                            followers="1987"
                            fol="F O L O W E R S"
                            up={up}
                            amount="12 Today"
                        />
                    </Col>

                    <Col>
                        <CardC
                            image={twitter}
                            name="@NathanF"
                            followers="1044"
                            fol="F O L O W E R S"
                            up={up}
                            amount="99 Today"
                        />
                    </Col>

                    <Col>
                        <CardC
                            image={instagram}
                            name="@realnathanf"
                            followers="11k"
                            fol="F O L O W E R S"
                            up={up}
                            amount="1099 Today"
                        />
                    </Col>

                    <Col>
                        <CardC
                            image={youtube}
                            name="Nathan F."
                            followers="8239"
                            fol="F O L O W E R S"
                            up={down}
                            amount="144 Today"
                        />
                    </Col>

                </Row>

                {/* This is the Second Row */}
                <Row>
                    <div className=' mt-3 d-flex justify-content-start'>
                        <h1>Overview - Today</h1>
                    </div>
                </Row>

                <Row className='mt-3'>
                    <Col>
                        <CardB
                            page="Page Views"
                            image2={facebook}
                            followers2="87"
                            up2={up}
                            percent="3%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Likes"
                            image2={facebook}
                            followers2="52"
                            up2={down}
                            percent="2%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Likes"
                            image2={instagram}
                            followers2="5462"
                            up2={up}
                            percent="2257%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Profile Views"
                            image2={instagram}
                            followers2="52K"
                            up2={down}
                            percent="1375%"
                        />
                    </Col>

                </Row>

                {/* This is the Thrid Row */}
                <Row className='mt-5'>
                    <Col>
                        <CardB
                            page="Retweets"
                            image2={twitter}
                            followers2="117"
                            up2={up}
                            percent="303%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Likes"
                            image2={twitter}
                            followers2="507"
                            up2={down}
                            percent="553%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Likes"
                            image2={youtube}
                            followers2="107"
                            up2={up}
                            percent="19%"
                        />
                    </Col>

                    <Col>
                        <CardB
                            page="Retweets"
                            image2={youtube}
                            followers2="1407"
                            up2={down}
                            percent="12%"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
