import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { GenericAll, FindUserByUsername } from './Queries'
import { AddUser, LikeLocationBlog } from './Mutations'
import { GET_LOCATIONBLOGS, GET_USERS } from '../statements/queries'

const client = new ApolloClient({
    uri: `https://www.stanitech.dk/friendfinder/graphql`
});

function DisplayComponent ({ category }) {
    switch (category) {
        case 'locationblogs':
            return <GenericAll statement={GET_LOCATIONBLOGS} />
        case 'users':
            return <GenericAll statement={GET_USERS} />
        case 'adduser':
            return <AddUser />
        case 'finduser':
            return <FindUserByUsername />
        case 'likelocationblog':
            return <LikeLocationBlog />
        default:
            return null;
    }
}

export default class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'locationblogs'
        }
    }

    change = (event) => {
        this.setState({ category: event.target.value })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <section >
                    <div >
                        <header>
                            <h2>Miniproject Apollo Client Frontend</h2>
                        </header>
                        <div >
                            <select name="category" id="category" onChange={this.change} value={this.state.category}>
                                <option value="locationblogs">locationblogs</option>
                                <option value="users">users</option>
                                <option value="adduser">adduser</option>
                                <option value="finduser">Find user</option>
                                <option value="likelocationblog">likelocationblog</option>
                            </select>
                        </div>
                        <DisplayComponent category={this.state.category} />
                    </div>
                </section>
            </ApolloProvider>
        )
    }
}
