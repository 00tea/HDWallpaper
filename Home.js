
import React ,{useState}from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
import { StyleSheet, Text, View,SafeAreaView,StatusBar,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard,TouchableOpacity, Image,
} from 'react-native';

export  function Home({navigation}) {
 
   const [userName,setUserName] = useState();
 const [passWord,setPassWord] = useState();
 
  return (
    <SafeAreaView style={styles.container} >
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Wallpaper');
        }}>
        <Image  source={require('./Screen/bg.jpg')}>
        </Image>
        </TouchableOpacity>
      </SafeAreaView>
    
  );
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
