
import React ,{useState}from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
import { StyleSheet, Text, View,SafeAreaView,StatusBar,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard,TouchableOpacity,
} from 'react-native';

export  function Home({navigation}) {
   const [userName,setUserName] = useState();
 const [passWord,setPassWord] = useState();
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="light-content"></StatusBar>
      <KeyboardAvoidingView behavior='padding' style={styles.container} >
       <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
       <View style={styles.container}>
         <View style = {styles.logocontainer}>
              <Text style = {styles.logo}>Login</Text>
              <Text style = {styles.title}> Màn Hình Đăng Nhập </Text>
         </View>

        <View style ={styles.inforContainer}>
        <TextInput style={styles.input}
          placeholder='Enter Username/email'
          placeholderTextColor='rbga(255,255,255,0.8)'
          returnKeyType='next'
          keyboardType='email-address'
          onChangeText={(text)=>{
            setUserName(text) 
            value={userName}
          }}
        />
         <TextInput style={styles.input}
          placeholder='Enter Password'
          placeholderTextColor='rbga(255,255,255,0.8)'
          returnKeyType='go'
          secureTextEntry
          onChangeText={(text)=>{
            setPassWord(text)
            value={passWord}
          }}
        />
        <TouchableOpacity style={styles.buttonContainer}    onPress={()=>{
              if(userName == 'Admin' && passWord == 'Admin'){
                alert('Đăng nhập thành công');
                navigation.navigate('Profile', { name: "Jane" })
              } else {
                alert('Đăng nhập thất bại')
              }
           
          //  fetch('https://jsonplaceholder.typicode.com/posts', {
          //   method: 'POST',
          //   headers: {
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     userName: 'yourValue',
          //     Password: 'yourOtherValue',
          //   })
            
          // })
        //   .then(Response => Response.json())
        //   .then(data => alert('Username:'+data.userName+'\n'+'Password: '+data.Password))
         }}>
          <Text style={styles.buttonText}>SIGN IN</Text>

        </TouchableOpacity>
        </View>
      </View>

       </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
