import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ROSLIB from 'roslib';

export default function App() {
 
  var ROSLIB = require('roslib');

  var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
  })

  ros.on('connection', function(){
    console.log("Connected to websocket server.");
  })

  ros.on('error', function(error){
    console.log("Error connecting to websocket server: ", error);
  });

  ros.on('close', function(){
    console.log("Connection to websocket closed.");
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
