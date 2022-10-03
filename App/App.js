import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Resultats from './screens/resultats';
import { Provider } from 'react-redux';
import store from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Quiz'>
            <Stack.Screen options={{headerShown: false}} name='Quiz' component={Quiz}></Stack.Screen>
            <Stack.Screen options={{headerShown: false}} name='Resultats' component={Resultats}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    
  
    
    
  )
}

export default App

const styles = StyleSheet.create({
 
})