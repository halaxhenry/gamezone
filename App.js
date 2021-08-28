import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Stack from "./routes/homeStack"

import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

