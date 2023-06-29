
import { ImageBackground,Text, View, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { styles } from '../../css/css.js';
// import { Switch } from 'react-native-web';
// import { TextInput } from 'react-native-web';

export default function TelaCadastro({ navigation }) {
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img1.png')} style={{width: '100%', height: '100%',opacity:'90%'}}>
        <View style={styles.boasVindas}>

          <Image
            source={require('../../assets/logomarca.png')}
            resizeMode='contain' 
            
          />


          <Image
            source={require('../../assets/Cadastro.png')}
            resizeMode='contain'
          />

        </View>

        <View style={styles.alinhamentoCentro}>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder='Nome'
            placeholderTextColor='#EBEBEB'

          />
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
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder='Confirmar senha'
            placeholderTextColor='#EBEBEB'
            secureTextEntry={true}
          />




          <TouchableOpacity style={styles.botaoAcessar}>
            <Text style={styles.textoBotaoAcessar}>Cadastrar</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.botoesNovaContaEEsqueceuSenha}>

          <TouchableOpacity>
            <Text style={styles.botaoEsqueceuSenha} onPress={() => navigation.navigate("Login")}>Cancelar</Text>
          </TouchableOpacity>




        </View>
        </ImageBackground>
    </View>
  );
}