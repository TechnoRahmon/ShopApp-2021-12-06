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

const Editproducts = ({ navigation, route  }) => {
    const  productId   = route.params&&route.params.productId ;   
 

    // if the platform is ios 
    if(Platform.OS==='ios'){
        return( 
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1,}}
            contentContainerStyle={{flexGrow: 1,}}>

                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                        <InputItems productId={productId} navigation={navigation} />

                </KeyboardAvoidingView>

            </ScrollView>)
    }

    
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1,}}
        contentContainerStyle={{flexGrow: 1,}}>
         
            <InputItems navigation={navigation} productId={productId} /> 
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})

export default Editproducts;
