import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import {Inverter,MegaSena} from './componentes/Multi'


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Simples" component={Simples} />
        <Drawer.Screen name="ParImpar" component={ParImpar} />
        <Drawer.Screen name="Inverter" component={Inverter} />
        <Drawer.Screen name="MegaSena" component={MegaSena}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
