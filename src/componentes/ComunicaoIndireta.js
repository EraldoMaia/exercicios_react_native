import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
<View>
  <TextInput value={props.textp} style={Padrao.ex}
  onChangeText={props.chamarQuandoMudar}>
  </TextInput>
</View>

export default class TextoSincronizado extends Component{

state = {texto:''}

alterarTexto = texto =>{this.setState({texto})}

render(){
  return(
    <View style={Padrao.view}>
      <Text style={Padrao.ex}>{this.state.texto}</Text>
      <Entrada texto = {this.state.texto} 
      chamarQuandoMudar = {this.alterarTexto} />
    </View>
  )
}




}