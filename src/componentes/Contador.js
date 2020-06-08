import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component{
  state = {numero: 10}

  maisUm = () => {this.setState({numero: this.setState.numero + 1})}
  Limpar = () => {this.setState({numero: 0})}

  render(){
    return(
      <View style={Padrao.view}>
        <Text style={Padrao.ex}>{this.state.numero}</Text>
        <TouchableHighlight onPress={this.maisUm}
         onLongPress={this.Limpar}>
        <Text style={Padrao.ex}>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}