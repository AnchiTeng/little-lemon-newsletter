import {useEffect,useState} from 'react';
import { View ,Text,Image,TextInput,KeyboardAvoidingView, StyleSheet,Pressable,ScrollView,Alert} from 'react-native';
import logo from '../assets/little-lemon-logo-grey.png';
import  {validateEmail}  from '../utils/index.js';
import responsiveSize from './Size';


const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(!validateEmail(email));
  }, [email]);
  // useEffect(() => {
  //   const isValid = validateEmail(email);
  //   if (!isValid) {
  //     setDisable(true);
  //   } else {
  //     setDisable(false);
  //   }
  // }, [email]);

  const onPressSubscribe = () => {
    if (validateEmail(email)) {
      Alert.alert(`Thanks for subscribing. Stay tuned!`);
      setEmail('');
      setDisable(true)
      
    } else {
      Alert.alert('Invalid Email. Try again!');
    }
  };
 
  return (
   <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <ScrollView keyboardDismissMode='on-drag'>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicous recipes!
      </Text>
      <TextInput style={styles.input} placeholder='email' returnKeyType="done" onChangeText={setEmail} value={email}/>

      <Pressable style={[styles.btn,{
                backgroundColor: disable ? 'gray' : '#495E57',
                opacity: disable ? 0.7 : 1,
              }]} 
     onPress={onPressSubscribe}
     disabled={disable}>
        <Text style={styles.btnText}>
          Subscribe
        </Text>
      </Pressable>
   
   </View>
    </ScrollView>
  </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    
  },
  logo:{
    marginVertical:responsiveSize(60),
    width:responsiveSize(160),
    height:responsiveSize(160),
  },
  text:{
    fontSize:responsiveSize(20),
    marginHorizontal:responsiveSize(30),
    textAlign:'center',

  },
  input:{
   padding:10,
   borderWidth: 1, 
   height: responsiveSize(40), 
   margin: responsiveSize(15), 
   width:responsiveSize(300),
   borderRadius:5,
   fontSize:responsiveSize(16),
  },
  btn:{
    backgroundColor:'#495E57',
    height:responsiveSize(30),
    borderRadius:5,
    justifyContent:'center',
    width:responsiveSize(300),
  },
  btnText:{
    color:'white',
    textAlign:'center',
    fontSize:responsiveSize(16),
  }
})

export default SubscribeScreen;
