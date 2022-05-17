import React from 'react';
import { Component } from 'react';
import Display from './Display';
import { Container, Row, Col } from 'react-bootstrap';
import openAiImg from '../OpenAILogo.png';

class Home extends Component {
    render() {
        return (
            <div style={{marginBottom:100}}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={openAiImg}
                        alt="Open AI Logo" />
                    <h1 style={{marginTop: 20}}>Online Artificial Intelligence AI (API) with OpenAI</h1>
                    <p style={{marginBottom: 30}}>Start by picking any of the use-cases below to start generating AI content.</p>

                    <Row>
                        <Col>
                            <Display
                                header="Product Descriptions"
                                title="Generate Product Descriptions"
                                text="Generate product descriptions for any types of products, simply enter the name and product description to get started."
                                theLink="./product-description" />
                        </Col>
                    
                        <Col>
                            <Display
                                header="Marketing Emails"
                                title="Cold Email Template"
                                text="This is perfect for marketing agents or companies who need fresh ideas daily on cold email content that is created by AI technology."
                                theLink="./cold-emails" />
                        </Col>
                    
                        <Col>
                            <Display
                                header="Creating Tweets"
                                title="Generate Tweets"
                                text="Start generating tweet ideas for your online social media campaigns on twitter. Create endless unique ideas, no more writers block."
                                theLink="./tweets" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;