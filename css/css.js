import * as React from 'react';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f1c1c',
    },

    alinhamentoCentro: {
      alignItems: 'center',
    },
  
    input: {
      marginBottom: '3%',
      fontWeight: 'bold',
      width: 226,
      height: 40,
      borderWidth: 1,
      borderColor:'#F8F8FF',
      backgroundColor:'#686868',
      borderRadius:5,
      opacity:0.9,
      padding:10,
    },
    label:{
      fontWeight: 'bold',
      color:'#EBEBEB',
      marginBottom: '3%',
      
    },

    botaoAcessar: {
      backgroundColor: 'rgba(255, 0, 0, 0.66) -21.62%, rgba(252, 3, 3, 0.66) 54.46%, rgba(0, 0, 0, 0.6138) 108.55%',
      width: '30%',
      marginTop: '10%',
      marginBottom: '3%',
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      opacity:0.9
  
    },
  
    textoBotaoAcessar: {
      color: '#FFF5EE',
      fontSize: 14,
      opacity:0.8
    },
  
    botaoCadastrar: {
  
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#FFFFFF',
  
    },
  
    botaoEsqueceuSenha: {
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#FFFFFF',
    },
    botaoLogin:{
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#FFFFFF',
      
    },
  
    botoesNovaContaEEsqueceuSenha: {
      marginTop: '5%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      opacity:0.6,
   
    },

    boasVindas: {
      
      marginBottom: '10%',
      alignItems: 'center',
  
    },
  
  });

  export {styles};