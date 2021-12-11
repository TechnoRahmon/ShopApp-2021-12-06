import React from 'react';
import {View,
        Text,
        TextInput,
        KeyboardAvoidingView,
        TouchableWithoutFeedback,
        Keyboard,
        Platform,
        ScrollView,
        StyleSheet} from 'react-native';

import InputItems from './../components/InputItems'

const Editproducts = () => {
   

    // if the platform is ios 
    if(Platform.OS==='ios'){
        return( 
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1,}}
            contentContainerStyle={{flexGrow: 1,}}>

                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                        <InputItems/>

                </KeyboardAvoidingView>

            </ScrollView>)
    }

    
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1,}}
        contentContainerStyle={{flexGrow: 1,}}>
         
            <InputItems/> 
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})

export default Editproducts;
