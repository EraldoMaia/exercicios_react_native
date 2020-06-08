import React from 'react';
import {Text, View} from 'react-native';
import Padrao from '../estilo/Padrao'

export default (props) =>
<View style={Padrao.view}>
 <Text style={[Padrao.ex]}>Função Arron 1: {props.texto}</Text>
 </View>