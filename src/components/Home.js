import React from 'react';
import { Component } from 'react';
import Display from './Display';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import openAiImg from '../OpenAILogo.png';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    {/* <Carousel>
                        <Carousel.Item>  */}
                            <img
                                className="d-block w-100"
                                src={openAiImg}
                                alt="Open AI image" />
                        {/* </Carousel.Item> 
                    </Carousel> */}

                    <h1>Open AI practice</h1>

                    <Row>
                        <Col>
                            <Display
                                header="Product Descriptions"
                                title="Generate Product Descriptions"
                                text="Generate product descriptions for any types of products, simply enter the name and product descriptions"
                                theLink="./product-description" />
                        </Col>
                    
                        <Col>
                            <Display
                                header="Marketing Emails"
                                title="Cold Email Template"
                                text="Generate product descriptions for any types of products, simply enter the name and product descriptions"
                                theLink="./cold-emails" />
                        </Col>
                    
                        <Col>
                            <Display
                                header="Creating Tweets"
                                title="Generate Product Descriptions"
                                text="Generate product descriptions for any types of products, simply enter the name and product descriptions"
                                theLink="./tweets" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;