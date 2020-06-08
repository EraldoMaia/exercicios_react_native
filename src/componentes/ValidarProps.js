import React from 'react'
import PropTypes from 'prop-types'
import {Text, View} from 'react-native'
import Padrao from '../estilo/Padrao'

const ValidarProps = props => 
<View style={Padrao.view}>
<Text style={Padrao.ex}>
{props.label}
{props.ano + 2000}
</Text>
</View>

ValidarProps.defaultProps = {
  label: 'Ano: '
}

ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired
}

export default ValidarProps