import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux'

const Ordersscreen = () => {

    const { orders } = useSelector(state=> state.order);
    console.log('from orders screen  :', orders );

    return (
        <View>
           <Text> Orders Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Ordersscreen;
