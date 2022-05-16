import React from 'react';
import { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import openAiImg from '../OpenAILogo.png';

const { Configuration, OpenAIApi } = require("openai");

class ProductDescription extends Component {
   constructor() {
       super()
       this.state = {
           heading: 'The Response from the AI will be shown here',
           response: '..... await the response'
       }
   }

   onFormSubmit = e => {
       e.preventDefault();

       const formData = new FormData(e.target),
       formDataObj = Object.fromEntries(formData.entries())
       console.log(formDataObj.productName)

       this.setState({ 
           heading: `AI Product Description Suggestions for: ${formDataObj.productName}`,
           response: `The Response from OpenAI API will be shown here.`,
       })
   }

   render() {

    return (
        <div>
            <Container>
                <img
                className="d-block w-100"
                src={openAiImg}
                alt="Open AI image" />
                <h1 style={{color: "violet"}}>Generate Product Description</h1>
                <h4>Generate product descriptions for any type of product, simply enter the name and product description</h4>
                <Form inSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>What product would you like to get a description for?</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            placeholder="Enter Product Name" />
                        <Form.Text className="text-muted">
                            Enter as much information as possible for more accurate descriptions.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="light" size="lg" type="submit">
                    🤖 Get AI Suggestions 🤔 
                    </Button>
                </Form>

                <Card>
                    <Card.Body>
                        <Card.Title><h6>{this.state.heading}</h6></Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
   }
}

export default ProductDescription;