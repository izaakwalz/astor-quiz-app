/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Description from './src/screens/Description';
import CategoryScreen from './src/screens/CategoryScreen';
// import QuizScreen from './src/screens/QuizScreen';
import Quiz from './src/screens/Quiz';
import ResultScreen from './src/screens/ResultScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={HomeScreen} />
        <AppStack.Screen name="CategoryScreen" component={CategoryScreen} />
        <AppStack.Screen name="QuizScreen" component={Quiz} />
        <AppStack.Screen name="Description" component={Description} />
        <AppStack.Screen name="GameResultsScreen" component={ResultScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
