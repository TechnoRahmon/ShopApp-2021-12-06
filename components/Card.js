import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Colors from './../constants/Colors'
const Card = ({ children , style }) => {
    return (
        <View style={{...styles.card , ...style }}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card :{
        backgroundColor:'#fff',
        shadowOffset:{width:0, height:2},
        shadowColor:Colors.dark,
        shadowRadius:10,
        shadowOpacity:0.24,
        elevation:6,
         width:'95%',
         marginHorizontal:10,
         marginVertical:10
    }
})

export default Card;
