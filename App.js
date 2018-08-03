import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersList from './components/users.list';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UsersList/>
        <Text style={{padding: 10, fontSize: 42}}>This is heading!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 20,
    borderTopColor: "#7EC0EE"
  },
});
