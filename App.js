import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contenedor from './componentes/Contenedor';
import ContenedorInput from './componentes/ContenedorInput';

function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor : 'white', height : '100%' }}>
    <ContenedorInput  navigation={navigation}></ContenedorInput>
    
  
    </View>
  );
}

function secon({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor : 'white', height : '100%' }}>
    <Contenedor  navigation={navigation}></Contenedor>
    
  
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="secon" component={secon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;