import React, { Component } from 'react'
import styled from 'styled-components';

import { Form, Input, Button } from './styledComps';

export default class Login extends Component {
    state = { username: '', password: '' }
    handleUsername = ({ target }) => { this.setState({ username: target.value }) }
    handlePassword = ({ target }) => { this.setState({ password: target.value }) }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/blogs')
        this.props.login(this.state.username, this.state.password)
    }

    handleRegister = (event) => {
        event.preventDefault();
        this.props.history.push('/register')
    }
    render() {
        return (
            <Container>
                <Form>
                    Login<br />
                    <Input type='text' placeholder='Username' onChange={this.handleUsername} /><br />
                    <Input type='password' placeholder='Password' onChange={this.handlePassword} /><br />
                    <Button onClick={this.handleSubmit} >
                        Login
                    </Button>
                    <br />
                    <Button onClick={this.handleRegister} >
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
    display:inline-block;
`
