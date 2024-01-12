import React from "react";
import { Text ,StyleSheet, View, TextInput , Tex, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Contenedor ({ navigation }){
    return (
      <ScrollView>
   <View style={styl.container} >

     <View style={styl.container_texto} >
      <Text style={{fontSize : 17, paddingLeft : 6}}>Queremos conocer mas acerca de ti</Text>
     </View>

     <View style={styl.container_input} >
     <View style={styl.container_Iunpt_texto} >
      <Text style={styl.Font_dos}>Nombres :</Text>
     </View>
     <View style={styl.container_Iunpt} >
      <TextInput style={styl.InputTex}></TextInput>
     </View>
     </View>


     <View style={styl.container_input} >
     <View style={styl.container_Iunpt_texto} >
      <Text style={styl.Font_dos}>Apellidos :</Text>
     </View>
     <View style={styl.container_Iunpt} >
      <TextInput style={styl.InputTex}></TextInput>
     </View>
     </View>

     <View style={styl.container_input} >
     <View style={styl.container_Iunpt_texto} >
      <Text style={styl.Font_dos}>Correo Electronico :</Text>
     </View>
     <View style={styl.container_Iunpt} >
      <TextInput style={styl.InputTex}></TextInput>
     </View>
     </View>


     <View style={styl.container_input} >
     <View style={styl.container_Iunpt_texto} >
      <Text style={styl.Font_dos}>Contraseña :</Text>
     </View>
     <View style={styl.container_Iunpt} >
      <TextInput style={styl.InputTex}></TextInput>
     </View>
     </View>

     <View style={styl.container_input} >
     <View style={styl.container_Iunpt} >
     <TouchableOpacity style={styl.Btn}  onPress={() => navigation.navigate('home')}>
        <Text style={styl.Font} >Sing up</Text>
      </TouchableOpacity >
     </View>
     </View>

     
    
    
    
   
   </View> 
   </ScrollView>
    );
}

const styl = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width : '100%',
    height: '90%',
 // backgroundColor : 'blue'
   
  },container_texto: {
    backgroundColor: 'white',
    width : '100%',
    height: 40, marginTop : 20 , justifyContent : 'center' , marginBottom : 20
  },container_input: {
   // backgroundColor: 'red',
    width : '100%',
    height: 105,
  }, container_Iunpt_texto: {
   // backgroundColor: 'yellow',
    width : '100%',
    height: 20,
  },container_Iunpt: {
   // backgroundColor: 'green',
    width : '100%',
    height: 80, alignItems : 'center' , justifyContent : 'center'
  }, InputTex:{
    height : 55 , width : '80%', borderWidth : 1,
     borderRadius : 4 , paddingLeft : 10,
    fontSize : 20 , borderColor : 'gray', color : 'gray'
  },Font_dos:{
    fontSize : 17 , color : 'gray', paddingLeft : 35
  }
    ,Btn:{
      height : 50 , width : '80%', borderWidth : 1, marginTop : 14 ,
       alignItems : 'center' , textAlign : 'center', alignContent : "center",
        justifyContent : 'center' , borderRadius : 4 , backgroundColor : '#7F00F5'
    },Font:{
      fontSize : 20, fontWeight : 'bold' , color : 'white'
    }
});