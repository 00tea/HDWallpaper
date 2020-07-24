
import React ,{useState}from 'react';
import * as MediaLibrary from 'expo-media-library';

import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, Alert, View,SafeAreaView,StatusBar,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard,TouchableOpacity, Image, Button, ImageBackground,
} from 'react-native';

export  function AlertIMG({route}) {

  getPermissionAsync();

  async function getPermissionAsync () {
    // Camera roll Permission 
    if (Platform.OS === 'android'||Platform.OS==='ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }
  
   const {name} = route.params;
  return (
   <View style={{flex:1,}}>
     
     <ImageBackground style={{paddingTop:580,flex:1,flexDirection:'column',alignItems:'flex-end'}} source={{uri: name}}>
     <TouchableOpacity style={{marginRight:10, marginTop: -30}}  onPress={(item)=>{
      Alert.alert("Dowload ? ", "", [
        {
          text: "OK",
          onPress: () => {
            MediaLibrary.saveToLibraryAsync(name);
            Alert.alert(  'Notice ',"Dowloaded successful! at "+name);
          }
        },
        {
          text: "Đóng",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]);
     }}>
         <Image style={{width:80,height:80}} source={{uri: 'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Downloads-icon.png'}}></Image>
         </TouchableOpacity>
        
     </ImageBackground>
    
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'rgb(32,53,70)',
     flexDirection:'column',
  },
  logocontainer:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  },
  logo:{
    color:'white',
    fontSize:50,

  },
  title:{
    color:"yellow"
  },
  inforContainer:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    height:200,
    padding:20,
    //backgroundColor:'red',
    
  },
  input:{
    marginTop:10,
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    paddingHorizontal:10,
    color:'#FFF',
  },
  buttonContainer:{
    marginTop:15,
        backgroundColor:'#f7c744',
        paddingVertical:15,
  },
  buttonText:{
     textAlign:'center',
     fontWeight:'bold',
     fontSize:18,
     color:'rgb(32,53,70)',
  },
 
});
