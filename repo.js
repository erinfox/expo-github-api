import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {gql} from "apollo-boost";
import {Query} from "react-apollo";
import ModalPopUp from "./modal";

const ALL_REPOS_QUERY = gql`
  query repos {
    viewer {
      name
      repositories(last: 10) {
        totalCount
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
      console.log({loading, error, data});
      return (
        <View style={styles.container}>
          {/* {!loading && data.viewer.map( => <View> <ModalPopUp /></View>)} */}
          {/* {data.name} */}
          <ModalPopUp />
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
// https://developer.github.com/v4/explorer/?variables=%20%7B%0A%20%20%20%22number_of_repos%22%3A%203%0A%7D&query=query%28%24number_of_repos%3AInt%21%29%20%7B%0A%20%20viewer%20%7B%0A%20%20%20%20name%0A%20%20%20%20%20repositories%28last%3A%20%24number_of_repos%29%20%7B%0A%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%20%20%7D%0A%7D%0A
