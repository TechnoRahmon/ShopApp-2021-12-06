import React from 'react';
import {View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
     StyleSheet} from 'react-native';


const Custombutton = ({style , onClick,  children}) => {

    let TouchableContainer  = TouchableOpacity;

    if ( Platform.OS==='android' && Platform.Version >= 21 ){
        TouchableContainer = TouchableNativeFeedback 
    }

    return (
        <TouchableContainer onPress={onClick} style={styles.container}>
            <View style={{...styles.button , ...style }}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableContainer>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius:5,
        alignContent:'center',
        justifyContent: 'center',
        width:'95%',
        marginHorizontal:10,
        marginVertical:15,
        height:40, 
    },
    
    container:{
        justifyContent: 'center',
        alignContent:'center',
        flex:1
    },  
    text:{
        fontFamily:'share',
        textAlign:'center',
        fontSize:18
    }
})

export default Custombutton;
