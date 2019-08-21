import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";
import Repo from "./repo";
import {ApolloProvider} from "react-apollo";

// const token = "827a871d6b737aae7b2d93a9277738818e4c5d51";

// const getGithubUserAccount = token =>
//   fetch(`https://api.github.com/user?access_token=${token}`).then(res =>
//     res.json()
//   );

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://api.github.com/user?access_token=827a871d6b737aae7b2d93a9277738818e4c5d51"
  }),
  cache: new InMemoryCache()
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

// AppRegistry.registerComponent("MyApplication", () => App);
