
import {View} from 'react-native';
import TelaLogin from './pages/telaLogin/telaLogin.js';
// import  {styles}  from './css/css.js';
import TelaCadastro from './pages/telaCadastro/telaCadastro.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaEsqueciSenha from './pages/telaEsqueciSenha/esqueciSenha.js';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     
        
        <NavigationContainer>
          {/* gerenciar navegação */}
          {/* criar area de navegação */}
          <Stack.Navigator>
          <Stack.Screen 
          name="Login" 
          component={TelaLogin} 
          opitons={{headerShown: false}}/>
          <Stack.Screen 
          name="TelaCadastro" 
          component={TelaCadastro} 
          opitons={{headerShown: false}}/>
          <Stack.Screen 
          name="EsqueciSenha" 
          component={TelaEsqueciSenha} 
          opitons={{headerShown: false}}/>
          </Stack.Navigator>
          
          
          
          
          
          

        </NavigationContainer>

    
    
  );
  
}



