import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{
  state = {texto: ''}
  alterarTexto = texto => {this.setState({texto})}
render(){
  return(
    <View style={Padrao.view}>
      <Text style={Padrao.ex}>{this.state.texto}</Text>
      <TextInput style={Padrao.ex} 
      value={this.state.texto} 
      onChangeText={this.alterarTexto}></TextInput>
    </View>
  )
}






}