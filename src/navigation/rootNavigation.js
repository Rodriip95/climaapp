import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={
            {
              headerStyle: {
                backgroundColor: colors.whiteBlue
              },
              headerTitle: 'Clima App',
              headerTitleStyle: {
                fontFamily: 'Poppins-Medium',
                fontSize: 24,
                color: colors.yellow
              }
            }
          }/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
