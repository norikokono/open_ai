import React from 'react';
import { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import openAiImg from '../OpenAILogo.png';

const { Configuration, OpenAIApi } = require("openai");

class Tweets extends Component {
   constructor() {
       super()
       this.state = {
           heading: 'The response from the AI will be shown here',
           response: '..... await the response',
       }
    }

   onFormSubmit = e => {
       e.preventDefault();

       const formData = new FormData(e.target),
       formDataObj = Object.fromEntries(formData.entries())
       console.log(formDataObj.productName)

    // Open AI code ---------------------------
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: `Write a detailed, smart, informative and professional Tweets for ${formDataObj.tweetKeywords}`,
            temperature: 0.8,
            max_tokens: 280,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({ 
                heading: `AI Product Description Suggestions for: ${formDataObj.tweetKeywords}`,
                response: `${response.data.choices[0].text}`,
            })
        });
    // -------------------------------------------
    }

    render() {
        return (
            <div style={{marginBottom:100}}>
                <Container>   
                    <img
                    className="d-block w-100"
                    src={openAiImg}
                    alt="Open AI Logo" />
                    <h1 style={{color: "MediumOrchid", marginTop: 20}}>Generate Tweets</h1>
                    <h4 style={{marginBottom: 20}}>Start generating tweet ideas for your online social media campaigns on twitter. Create endless unique ideas, no more writers block.</h4>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicTweets">
                            <Form.Label>What Tweet would you like to post today?</Form.Label>
                            <Form.Control
                                type="text"
                                name="tweetKeywords"
                                placeholder="Enter Keywords"
                                className="shadow-sm" />
                            <Form.Text className="text-muted">
                                Enter as much information as possible for more accurate descriptions.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="light" size="lg" type="submit" style={{marginBottom: 20}} className="shadow-sm">
                            <span role="img" aria-label="robot">🤖</span> Get AI Suggestions <span role="img" aria-label="thinking face Emoji">🤔</span>
                        </Button>
                    </Form>

                    <Card className="shadow">
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

export default Tweets;