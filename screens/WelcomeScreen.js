import * as React from 'react';
import { View ,Text, StyleSheet, Image,Pressable} from 'react-native';
import responsiveSize from './Size';
import logo from '../assets/little-lemon-logo.png'


const WelcomeScreen = ({ navigation }) => {
  

  return (
  <>
  <View style={styles.container}>
    
    <Image source={logo} style={styles.logo} resizeMode="contain" accessible={true} accessibilityLabel='Little Lemon Logo'/>
    <Text style={styles.text1} numberOfLines={2} ellipsizeMode='tail'>
       Little Lemon, your local
    </Text>
    <Text style={styles.text2}>
    Mediterranean Bistro 
    </Text>
  </View>
  <Pressable style={styles.btn} onPress={()=>navigation.navigate('Subscribe')}>
    <Text style={styles.btnText}>
      Newsletter
    </Text>
  </Pressable>
  </>

  
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    color:'black',
   
   alignItems:'center'
    
  },
  text1:{
   color:'black',
   textAlign:'center',
   marginTop:50,
   fontWeight:'600',
   fontSize:responsiveSize(20),
  },
  text2:{
    color:'black',
    textAlign:'center',
    fontWeight:'600',
    fontSize:responsiveSize(20),
    
   },
  logo:{
    width: responsiveSize(180),
    height: responsiveSize(180),
    borderRadius: 20,
    marginTop:150,
  },
  btn:{
    backgroundColor:'#495E57',
    marginBottom:100,
    marginHorizontal:responsiveSize(30),
    height:responsiveSize(30),
    borderRadius:10,
    justifyContent:'center',
  },
  btnText:{
    color:'white',
    textAlign:'center',
    fontSize:responsiveSize(16),
  }
})
export default WelcomeScreen;
