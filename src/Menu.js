import * as React from 'react';
//import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import {Inverter,MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import TextoSincronizado from './componentes/ComunicaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Flex" component={Flex} />
        <Drawer.Screen name="ListaFlex" component={ListaFlex} />
        <Drawer.Screen name="ComunicaoIndireta" component={TextoSincronizado} />
        <Drawer.Screen name="Evento" component={Evento} />
        <Drawer.Screen name="ValidarProps" component={ValidarProps} />
        <Drawer.Screen name="Plataformas" component={Plataformas} />
        <Drawer.Screen name="Contador" component={Contador} />
        <Drawer.Screen name="Simples" component={Simples} />
        <Drawer.Screen name="ParImpar" component={ParImpar} />
        <Drawer.Screen name="Inverter" component={Inverter} />
        <Drawer.Screen name="MegaSena" component={MegaSena}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
