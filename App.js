import * as React from 'react';
import { View, Text ,Button, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contenedor from './componentes/Contenedor';
import ContenedorInput from './componentes/ContenedorInput';
import HomeS from './componentes/Home';

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor : 'white', height : '100%' }}>
    <ContenedorInput  navigation={navigation}></ContenedorInput>
    </View>
  );
}

function Sing({ navigation }) {
  return (
    <View style={{ backgroundColor : 'white', height : '100%' }}>
    <Contenedor  navigation={navigation}></Contenedor>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{  backgroundColor : 'white', height : '100%' }}>
  <HomeS></HomeS>
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Sing" component={Sing} />
        <Stack.Screen name="home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;