import React, { Component } from 'react'
import styled from 'styled-components';

import { Form, Input, Button } from './styledComps';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', password2: '' }
    }

    handleUsername = ({target}) => { this.setState({ username: target.value }) }
    handlePassword = ({target}) => { this.setState({ password: target.value }) }
    handlePassword2 = ({target}) => { this.setState({ password2: target.value }) }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.password)
        if (this.state.password === this.state.password2) {
            this.setState({ error: '' })
        } else {
            this.setState({ error: 'The passwords do not match!' })
        }
    }
    render() {
        return (
            <Container>
                <Form>
                    Register<br />
                    <Input type='text' placeholder='Username' onChange={this.handleUsername} /><br />
                    <Input type='password' placeholder='Password' onChange={this.handlePassword} /><br />
                    <Input type='password' placeholder='Confirm password' onChange={this.handlePassword2} /><br />
                    {this.state.error ? (<p style={{ color: 'red' }}>{this.state.error}</p>) : ''}
                    <Button onClick={this.handleSubmit} >
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}

// Styled components
const Container = styled.div`
    text-align: center;
    padding: 5rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
    background: #3c6382;
    width: 30rem;
    border-radius:1rem;
    display: inline-block;
`
