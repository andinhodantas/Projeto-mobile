
import {ImageBackground,Text, View, TextInput, TouchableOpacity, Image, Switch} from 'react-native';
import  {styles}  from '../../css/css.js';


export default function TelaLogin({navigation}) {
    
  return (
    
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/img1.png')} style={{width: '100%', height: '100%',opacity:0.9}}>
    <View style={styles.boasVindas}>
    
    <Image
       source={require('../../assets/logomarca.png')}
       resizeMode='contain'
       style={{opacity:0.8}} 
     />

     <Image
       source={require('../../assets/login.png')}
       resizeMode='contain'    
     />
    
    </View>

     <View style={styles.alinhamentoCentro}>

       <TextInput style={styles.input}
       keyboardType="email-address"
       placeholder='E-mail'
       placeholderTextColor='#EBEBEB'
        />

       <TextInput style={styles.input}
       keyboardType="default"
       placeholder='Senha'
       placeholderTextColor='#EBEBEB'
       secureTextEntry={true}
       />

    <TouchableOpacity style={styles.botaoAcessar}>
       <Text style={styles.textoBotaoAcessar}>Entrar</Text>
     </TouchableOpacity>
     

   </View>

  <View style={styles.botoesNovaContaEEsqueceuSenha}>
  
   <TouchableOpacity>
     <Text style={styles.botaoEsqueceuSenha}onPress={()=> navigation.navigate("EsqueciSenha")}>Esqueci a senha</Text>
   </TouchableOpacity>
   <TouchableOpacity>
     <Text style={styles.botaoCadastrar} onPress={()=> navigation.navigate("TelaCadastro")}>Criar nova conta</Text>
   </TouchableOpacity>
   
   </View>
   
   </ImageBackground>
 </View>

 );
}

