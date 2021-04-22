import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { Authenticator, SignIn } from 'aws-amplify-react-native';
Amplify.configure(config)
export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
