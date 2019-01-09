import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login';
import Register from './Register';
import Blogs from './Blogs';
import { login } from '../facade';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
    }
  }

  handleLogin = async (username, password) => {
    let user = await login(username, password);
    // console.log(JSON.stringify(user))
    if (!user.username) {
      this.setState({ error: user.message })
    } else {
      this.setState({ user: user, error: '' })
    }
  }

  render() {
    const { error } = this.state
    return (
      <Router>
        <Container>
          {error ? (<span style={{ color: 'red' }}>{this.state.error}</span>) : ''}
          <Route exact={true} path='/' render={({history})=> <Login login={this.handleLogin} history={history} />}/>
          <Route path='/register' component={Register}/>
          <Route path='/blogs' component={Blogs}/>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div` 
  background-color: #b2bec3;
  padding: 0.5rem;
  padding-bottom: 100%;
  padding-top: 2rem;
  height: 100%;
  text-align: center;
`

export default App;
