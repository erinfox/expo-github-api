import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {gql} from "apollo-boost";
import {Query} from "react-apollo";
import ModalPopUp from "./modal";

const ALL_REPOS_QUERY = gql`
  query {
    user(login: "erinfox") {
      id
      name
      repositories(last: 10) {
        nodes {
          name
        }
      }
    }
  }
`;

const Repo = () => (
  <Query query={ALL_REPOS_QUERY}>
    {({loading, error, data}) => {
      if (loading)
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );

      return (
        <View style={styles.container}>
          <Text>{data.user.name}'s GitHub Repositories! </Text>
          {!loading &&
            data.user.repositories.nodes.map(repo => (
              <ModalPopUp text={repo.name} />
            ))}
        </View>
      );
    }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  repoContainer: {
    height: 200,
    width: "100%"
  }
});

export default Repo;
