import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Basictext = ({ style, children  }) => {
    return ( <Text style={{...styles.text , ...style }}> {children} </Text>);
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'share'
    }
})

export default Basictext;
