import React,{useState } from 'react';
import {View,
        TouchableWithoutFeedback,
        TextInput,
        Keyboard,
        StyleSheet} from 'react-native';
import BasicText from './BasicText'

const Inputitems = () => {
    
    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>

                <View style={styles.screen}>
                    <View style={styles.inputRow}>
                        <BasicText> Product Title</BasicText>
                        <TextInput style={styles.input}
                        autoCapitalize='none'
                            autoCorrect={false}
                            placeholder='Product Title' />
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText> Product Price</BasicText>
                        <TextInput style={[styles.input, styles.PriceInput]}
                            autoCorrect={false}
                            placeholder='Product Price' />
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText> Product Description</BasicText>
                        <TextInput style={styles.input}
                            autoCorrect={false}
                            placeholder='Product Description' />
                    </View>


                    <View style={styles.inputRow}>
                        <BasicText> Product Image Url</BasicText>
                        <TextInput style={styles.input}
                            autoCorrect={false}
                            placeholder='Product Image Url' />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding : 5
    },
    inputRow:{
        marginVertical:10,
      
       
    },
    input:{
        height:40,
        padding:10,
        margin:5,
        borderWidth:1,
        borderRadius:3
    },
    PriceInput:{
        width:200
    }
})

export default Inputitems;
