import React, { useRef, useState } from 'react';

enum Operadores{
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numerolast, setNumeroLast] = useState('0');

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0');
    setNumeroLast('0');
  }

  const armarNumero = ( numeroTexto: string ) => {
    //No aceptar doble punto

    numeroTexto =  numeroTexto == 'I' ? '1' : numeroTexto == 'II' ? '2' : numeroTexto == 'III' ? '3' : 
    numeroTexto == 'IV' ? '4' : numeroTexto == 'V' ? '5' : numeroTexto == 'VI' ? '6' : numeroTexto == 'VII' ? '7' : 
    numeroTexto == '8' ? 'VIII' : numeroTexto == 'IX' ? '9' : numeroTexto == '.' ? '.' : '0';

    if (numero.includes('.') && numeroTexto === '.') return;

    if ( numero.startsWith('0') || numero.startsWith('-0')) {

      // Punto decimal

      if ( numeroTexto === '.') {
        setNumero( numero + numeroTexto );

        //Evaluar si es otro cero, y hay un punto
      }else if( numeroTexto === '0' && numero.includes('.')){
        setNumero( numero + numeroTexto );
        //Evaluar si es diferente de cero y no tiene un punto
      }else if( numeroTexto !== '0' && !numero.includes('.')){
        setNumero( numeroTexto );
        //Evitar 0000.0
      }else if( numeroTexto === '0' && !numero.includes('.')){
        setNumero( numero );
      }else if( numeroTexto !== '0' && numero.includes('.')){
        setNumero( numero + numeroTexto );
      }
      
    }else{
      setNumero( numero + numeroTexto );
    }
  }

  const positivoNegativo = () => {
    if ( numero.includes('-') ) {
      setNumero( numero.replace('-', ''));
    }else{
      setNumero('-' + numero );
    }
  }

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if ( numero.includes('-') ) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if ( numeroTemp.length > 1 ) {
      setNumero( negativo + numeroTemp.slice(0,-1) );
    }else{
      setNumero('0');
    }
  }

  const cambiarNumPorAterior = () => {
    if ( numero.endsWith('.') ) {
      setNumeroLast( numero.slice(0,-1) );
    }else{
      setNumeroLast( numero );
    }
    setNumero('0');
  }

  const btnDividir = () => {
    cambiarNumPorAterior();
    ultimaOperacion.current = Operadores.dividir;
  }

  const btnMultiplicar = () => {
    cambiarNumPorAterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }

  const btnRestar = () => {
    cambiarNumPorAterior();
    ultimaOperacion.current = Operadores.restar;
  }

  const btnSumar = () => {
    cambiarNumPorAterior();
    ultimaOperacion.current = Operadores.sumar;
  }

  const calcular = () => {
    const numero1 = Number( numero );
    const numero2 = Number( numerolast );

    if (numero1 !== 0 && numero2 !== 0) {
      switch ( ultimaOperacion.current ) {
        case Operadores.dividir:
          setNumero(`${ numero2 / numero1 }`);
        break;
  
        case Operadores.multiplicar:
          setNumero( `${ numero1 * numero2 }` );
        break;
  
        case Operadores.restar:
          setNumero( `${ numero2 - numero1 }` );
        break;
  
        case Operadores.sumar:
          setNumero( `${ numero1 + numero2 }` );
        break;
  
      }
    }
    setNumeroLast('0');

  }

  return {
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
  }
}
