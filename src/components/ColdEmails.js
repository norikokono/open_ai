import React from 'react';
import { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import openAiImg from '../OpenAILogo.png';

const { Configuration, OpenAIApi } = require("openai");

class ColdEmails extends Component {
   constructor() {
       super()
       this.state = {
           heading: 'The response from the AI will be shown here',
           response: '..... await the response'
       }
    }

   onFormSubmit = e => {
       e.preventDefault();

       const formData = new FormData(e.target),
       formDataObj = Object.fromEntries(formData.entries())
       console.log(formDataObj.emailIdea)

    // Open AI code ---------------------------
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: `Write a detailed, smart, informative and professional email for ${formDataObj.emailIdea}`,
            temperature: 0.8,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({ 
                heading: `AI Product Description Suggestions for: ${formDataObj.emailIdea}`,
                response: `${response.data.choices[0].text}`,
            })
        });
    // -------------------------------------------
    }

    render() {
        return (
            <div>
                <Container>   
                        <img
                        className="d-block w-100"
                        src={openAiImg}
                        alt="Open AI Logo" />
                    <h1 style={{color: "MediumOrchid"}}>Generate Cold Emails</h1>
                    <h4>This is perfect for marketing agents or companies who need fresh ideas daily on cold email content that is created by AI technology.</h4>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicColdEmail">
                            <Form.Label>What product would you like to get a description for?</Form.Label>
                            <Form.Control
                                type="text"
                                name="emailIdea"
                                placeholder="Enter Email Idea" />
                            <Form.Text className="text-muted">
                                Enter as much information as possible for more accurate descriptions.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="light" size="lg" type="submit">
                            <span role="img" aria-label="robot">🤖</span> Get AI Suggestions <span role="img" aria-label="thinking face Emoji">🤔</span>
                        </Button>
                    </Form>

                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h6>{this.state.heading}</h6>
                            </Card.Title>
                            <hr />
                            <br />
                            <Card.Text>
                                <span>{this.state.response}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ColdEmails;