import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Stack from "./routes/homeStack"

import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );

}

