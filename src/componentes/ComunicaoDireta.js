import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'

export const Filho = props =>
<View style={Padrao.view}>
  <Text style={Padrao.ex}>
  Filho: {props.nome} {props.sobrenome}
  </Text>
</View>

export const Pai = props =>
<View style={Padrao.view}>
  <Text style={Padrao.ex}>
  Pai: {props.nome} {props.sobrenome}
  </Text>
  {props.children}
</View>

export const Avo = props =>
<View style={Padrao.view}>
  <Text style={Padrao.ex}>
  Avo: {props.nome} {props.sobrenome}
  </Text>

  <Pai nome = 'André' sobrenome = {props.sobrenome}>
    <Filho nome = 'Ana'/>
  </Pai>  

  <Pai {...props} nome = 'Pedro'>
    <Filho nome = 'Rebeca'/>
  </Pai>

</View>

export default avo
