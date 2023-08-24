import React from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

enum Operadores{
  sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

  const { 
    numero, 
    numerolast, 
    limpiar, 
    armarNumero, 
    positivoNegativo, 
    btnDelete, 
    cambiarNumPorAterior,
    btnDividir, 
    btnMultiplicar, 
    btnRestar, 
    btnSumar, 
    calcular 
  } = useCalculadora();

  return (
    <View style={ styles.calculadoraContainer } >
      {
        ( numerolast !== '0') && (
          <Text style={ styles.resultadoSmall }> { numerolast } </Text>
        )
      }
      <Text 
        style={ styles.resultado }
        numberOfLines={ 1 }
        adjustsFontSizeToFit={true}
      > 
        { numero } 
      </Text>

      {/* Fila de botones */}
      <View style={ styles.fila } >
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila } >
        <BotonCalc texto="VII" accion={armarNumero} />
        <BotonCalc texto="VIII" accion={armarNumero} />
        <BotonCalc texto="IX" accion={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila } >
        <BotonCalc texto="IV" accion={armarNumero} />
        <BotonCalc texto="V" accion={armarNumero} />
        <BotonCalc texto="VI" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila } >
        <BotonCalc texto="I" accion={armarNumero} />
        <BotonCalc texto="II" accion={armarNumero} />
        <BotonCalc texto="III" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila } >
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>

    </View>
  )
}
