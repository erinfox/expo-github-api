import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import Repo from "./repo";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Repo />
      </ApolloProvider>
    );
  }
}
