import React,{useState} from 'react';
import {View,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
     StyleSheet} from 'react-native';

import BasicText from './BasicText'
import Colors from './../constants/Colors'
import { color } from 'react-native-reanimated';

const Numericinput = ({ value , cartUpdate }) => {


    let TouchableContainer  = TouchableOpacity;

    if ( Platform.OS==='android' && Platform.Version >= 21 ){
        TouchableContainer = TouchableNativeFeedback 
    }


    const [conter , setCounter ] = useState(value);

    return (
        <View style={styles.Row}>
  
            <View style={styles.buttonContainer}>
                <TouchableContainer onPress={()=>{ cartUpdate('-')}} style={styles.TouchContainer}>
                    <View style={styles.button}>
                        <BasicText style={{...styles.text}}>- </BasicText>
                    </View>
                        
                
                </TouchableContainer>
            </View>
       
            
            <BasicText style={styles.counterValue}>
                {conter}
            </BasicText>

  

            <View style={styles.buttonContainer}>
                <TouchableContainer onPress={()=>{ cartUpdate('+')}}>
                    <View style={styles.button}>
                        <BasicText style={{...styles.text}}>+ </BasicText>
                    </View>
                </TouchableContainer>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Row:{
        marginTop:10,
        width:'60%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    TouchContainer:{
        flex:1
    },
    button:{
      
        width:35,
        height:35,
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft:3,
        borderRadius:25,

    },
    text:{
       alignItems: 'center',
       textAlign:'center',
       fontSize:20,  
       color:Colors.light
    },
    buttonContainer:{
        width:35,
        height:35,
        backgroundColor:Colors.accent,
        overflow: 'hidden',
        borderRadius:25
    },
    counterValue:{
        fontSize:18,
        color:Colors.dark
    }

})

export default Numericinput;
