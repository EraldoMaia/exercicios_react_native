import React, {Component} from 'react';
import {View} from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto = 'flexivel!!'/>
        <ParImpar numero ={30} />
        <Inverter texto = 'Eraldo'/>
        <MegaSena numeros = {8}/>
      </View>
    );
  }
}