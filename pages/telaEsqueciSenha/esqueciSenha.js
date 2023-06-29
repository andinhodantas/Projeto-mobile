import { ImageBackground, Text, View, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { styles } from '../../css/css.js';

export default function TelaEsqueciSenha({ navigation }) {

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img1.png')} style={{ width: '100%', height: '100%', opacity: 0.9 }}>
        <View style={styles.boasVindas}>

          <Image
            source={require('../../assets/logomarca.png')}
            resizeMode='contain'
            style={{ opacity: 0.8 }}
          />

          <Image
            source={require('../../assets/RecuperarSenha.png')}
            resizeMode='contain'
          />

        </View>

        <View style={styles.alinhamentoCentro}>
          <Text style={styles.label}>E-mail de recuperação</Text>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder='Digite o E-mail '
            placeholderTextColor='#EBEBEB'

          />
          <TouchableOpacity style={styles.botaoAcessar}>
            <Text style={styles.textoBotaoAcessar}>Enviar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.botoesNovaContaEEsqueceuSenha}>
          <TouchableOpacity>
            <Text style={styles.botaoEsqueceuSenha} onPress={() => navigation.navigate("Login")}>Tela de Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.botaoCadastrar} onPress={() => navigation.navigate("TelaCadastro")}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>

  );
}
