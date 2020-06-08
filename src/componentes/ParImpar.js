import React from 'react';
import {Text, View} from 'react-native';
import Padrao from '../estilo/Padrao'

export default props => 
<View style={Padrao.view}>
    {
      props.numero % 2 == 0
      ? <Text style ={Padrao.ex}>Par</Text> // ? = se
      : <Text style ={Padrao.ex}>Impar</Text> // : = senao
    }
</View>