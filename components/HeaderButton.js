import React from 'react';
import {View, StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons'
// icons
import { Ionicons } from '@expo/vector-icons'
import Colors from './../constants/Colors'

const Headerbutton = (props) => {
    return (
        <HeaderButton  {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS=='android'?Colors.dark : Colors.primary }
        />
    );
}

const styles = StyleSheet.create({})

export default Headerbutton;
