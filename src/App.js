import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto = 'flexivel!!'/>
        <ParImpar numero ={31} />
        <Inverter texto = 'Eraldo'/>
        <MegaSena numeros = {6}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});