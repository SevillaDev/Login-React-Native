import React from "react";
import { Text ,StyleSheet, View, TextInput , Tex, Image, TouchableOpacity } from "react-native";

export default function ContenedorInput ({ navigation }){
    return (
   <View style={styl.container} >
    <View><Image style={styl.Imagen} source={require('../assets/img/Logopr.png')}></Image></View>
    <View style={styl.Container_dos}>
      <TextInput style={styl.InputTex} placeholder="Usuario"></TextInput>
      <TextInput style={styl.InputTex} placeholder="Contraseña" secureTextEntry = 'true'></TextInput>
      <View style={styl.Container_tres} >
        <Text style={styl.Font_dos}>Olvidaste tu contraseña?</Text>
      </View>
      <TouchableOpacity style={styl.Btn}>
        <Text style={styl.Font}  onPress={() => navigation.navigate('secon')}>Login</Text>
      </TouchableOpacity >
      <View style={styl.Container_cuatro} >
        <Text style={styl.Font_dos} onPress={() => navigation.navigate('secon')}>Aun no tienes una cuenta?</Text>
      </View>
    </View> 
   </View> 
 
    );
}

const styl = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width : '100%',
    height: '50%',
    alignItems : 'center',alignContent : "center",
    justifyContent : 'center' 
   
  },Container_dos:{
    width : '100%',
    height: 300,
    alignItems : 'center', textAlign : 'right'
  },InputTex:{
    height : 55 , width : '80%', borderWidth : 1, marginTop : 14, borderRadius : 4 , paddingLeft : 10,
    fontSize : 20 , borderColor : 'gray', color : 'gray'
  },Btn:{
    height : 50 , width : '80%', borderWidth : 1, marginTop : 14 ,
     alignItems : 'center' , textAlign : 'center', alignContent : "center",
      justifyContent : 'center' , borderRadius : 4 , backgroundColor : '#7F00F5'
  },Font:{
    fontSize : 20, fontWeight : 'bold' , color : 'white'
  },Font_dos:{
    fontSize : 17 , color : 'gray'
  },Font_tres:{
    fontSize : 17 , color : '#7F00F5' , marginLeft : 10
  }
  ,Container_tres:{
    height : 40 , width : '80%' , justifyContent : 'flex-end'
   ,alignItems: 'flex-end'
  },Container_cuatro:{
    height : 40 , width : '80%'  , marginTop : 10 ,alignItems : 'center'
   
  },Imagen: {
    height : 200 , width : 200 , marginTop : -120 , marginBottom : 20
  }
  
});