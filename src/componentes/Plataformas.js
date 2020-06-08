import React from 'react'
import {Button, Alert, ToastAndroid, Platform, View} from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => {
  const notificar = msg =>{
    if (Platform.OS === 'android'){
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    }
    else{
      Alert.alert('Infromação',msg)
    }
  }
  return(
    <View style={Padrao.view}>
    <Button title='Plataforma?'
     onPress={()=>notificar('Parabéns!')}>

    </Button>
    </View>
  )
}