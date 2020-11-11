import React from 'react';
import Home from './Components/Home';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { FlatList,ScrollView } from 'react-native';



export default function App() {
    
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
        <Home/>
        <FAB style={styles.fab}  icon="plus" onPress={() => console.log('Pressed')} />
        
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FBFBFB', 
    marginTop: 25,    
  },

  fab: {
    position: 'absolute',
    backgroundColor: '#3975EC',
    margin: 16,
    right: 0,
    bottom: 0,
  },

});

