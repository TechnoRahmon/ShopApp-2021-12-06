import React from 'react';
import {View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
     StyleSheet} from 'react-native';

import Colors from './../constants/Colors'
const Custombutton = ({style , onClick,  children}) => {

    let TouchableContainer  = TouchableOpacity;

    if ( Platform.OS==='android' && Platform.Version >= 21 ){
        TouchableContainer = TouchableNativeFeedback 
    }

    return (
        <View style={styles.container }>
            <TouchableContainer onPress={onClick} style={styles.TouchContainer}>
                <View style={{...styles.button , ...style }}>
                    <Text style={styles.text}>
                        {children}
                    </Text>
                </View>
            </TouchableContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        
        alignContent:'center',
        justifyContent: 'center',
        width:'100%',
        height:45, 
        shadowOffset:{width:0, height:2},
        shadowColor:Colors.dark,
        shadowRadius:10,
        shadowOpacity:0.24,
        
    },
    container:{
       
        overflow:Platform.OS==='android' && Platform.Version>=21 ? 'hidden' : 'visible',
        borderRadius:5,
        elevation:3,
        width:'95%',
        marginHorizontal:10,
        marginVertical:15,
        height:45, 
        
    },
    TouchContainer:{
       
        flex:1
    },  
    text:{
        fontFamily:'share-bold',
        textAlign:'center',
        fontSize:18
    }
})

export default Custombutton;
