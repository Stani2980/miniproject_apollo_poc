import React from 'react';
import { Query, ApolloConsumer } from "react-apollo";
import { GET_USER_BY_USERNAME } from '../statements/queries'

// This method works for all getAll methods
export const GenericAll = ({statement}) => (
    <Query query={statement}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        var key = Object.keys(data)[0]
        var keyCount = 1000;

        return data[key].map((user, idx) => {
          var keys = Object.keys(user)
          var displayUser = keys.map(key => {
            keyCount++;
            return <p key={keyCount}>{key}: {JSON.stringify(user[key])}</p>
          })
          return <div key={idx}>
                    Element {idx+1}
                    {displayUser}
                    <hr></hr>
                  </div>
        });
      }}
    </Query>
)

export class FindUserByUsername extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      user: null
    }
  }

  onUserFetched = user => this.setState(() => ({ user })); // actually fetching the user
  handleChange = event => this.setState({userName: event.target.value}); // handles user input

  render() {
    var showUser = this.state.user != null ? JSON.stringify(this.state.user) : ""
    return (
      <ApolloConsumer>
            {client => (
              <div>
                <input placeholder='by username'type="text" value={this.state.userName} onChange={this.handleChange} />
                <button
                  onClick={async () => {
                    const { data } = await client.query({
                      query: GET_USER_BY_USERNAME,
                      variables: { userName: this.state.userName }
                    });
                    this.onUserFetched(data.getUserByUsername);
                  }}
                >
                  Find user by username
                </button>
                <p>{showUser}</p>
              </div>
            )}
      </ApolloConsumer>
    )
  }
}