import React from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodayScreen from './screens/TodayScreen';
import AddFoodScreen from './screens/AddFoodScreen';

const Stack = createStackNavigator();

export default App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
                      component={TodayScreen}
                      options={{
                        title: 'AUJOURD\'HUI',
                      }}
        />
        <Stack.Screen name="AddFoodScreen"
                      component={AddFoodScreen}
                      options={({ route }) => ({
                        title: 'Ajouter un aliment'
                      })}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({

});
