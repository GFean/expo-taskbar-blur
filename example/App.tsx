import { AppState, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as ExpoTaskbarBlur from 'expo-taskbar-blur';
import { useEffect, useState } from 'react';
import useAppState from './useAppState';

export default function App() {
  const {appState} = useAppState();

  useEffect(() => {
    if(appState){
      console.log(appState)
      if(appState === 'active'){
        ExpoTaskbarBlur.disableBlur()
      }else{
        ExpoTaskbarBlur.enableBlur()
      }
    }

  }, [appState]);
  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => {
      ExpoTaskbarBlur.enableBlur()
      setTimeout(() => {
        ExpoTaskbarBlur.disableBlur()
      }, 3000);
     }}>
     <Text>HI</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => ExpoTaskbarBlur.disableBlur()}>
     <Text>{"dis!"}</Text>
     </TouchableOpacity>

     <View style={{backgroundColor:'white'}}>
      <Text>Open up App.tsx to start working on your app!</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
