import React,{useState, useEffect } from 'react';
import {View,
        TouchableWithoutFeedback,
        TextInput,
        Keyboard,
        StyleSheet,
        Platform} from 'react-native';
import BasicText from './BasicText'
import isURL from 'validator/lib/isURL'
import isNumeric from 'validator/lib/isNumeric'
import Colors from './../constants/Colors'

const Inputitems = () => {
    const [productData , setProductData  ]= useState({
        title:'',
        price:'',
        description:'',
        imageUrl:''

    })

 const [DataValidator , setDataValidator ]= useState({
        title:'',
        price:'',
        description:'',
        imageUrl:''

    })

    const onInputChange=(type,text)=>{
        setProductData({ ...productData, [type] : text });
        if ( !text ){
            setDataValidator({...DataValidator , [type] :type+'is required '})

        }else if (type =='url' && !isURL(text)){
            setDataValidator({...DataValidator , [type] :'invalid URL!'})
        
        }else if ( type=='price' && !isNumeric(text)){
            setDataValidator({...DataValidator , [type] :'invalid price value!'})
        }else{
            setDataValidator({...DataValidator , [type] :''})
        }

        console.log(text, ' ' , type );
    }



    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                accessible={true}>

                <View style={styles.screen}>
                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Title</BasicText>
                        <TextInput style={styles.input}
                        autoCapitalize='none'
                            defaultValue={productData.title}
                            onChangeText={onInputChange.bind(null,'title')}
                            autoCorrect={false}
                            placeholder='Product Title' />
                            <BasicText style={styles.errorMessage}> Error Message </BasicText>
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Price</BasicText>
                        <TextInput style={[styles.input, styles.PriceInput, DataValidator.price&&{ borderColor :Colors.danger}]}
                            autoCorrect={false}
                            
                            defaultValue={productData.price}
                            onChangeText={onInputChange.bind(null,'price')}
                            keyboardType='number-pad'
                            placeholder='Product Price' />
                            {DataValidator.price?<BasicText style={styles.errorMessage}>{DataValidator.price} </BasicText>:null}
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Description</BasicText>
                        <TextInput style={styles.input}
                            autoCorrect={false}
                            defaultValue={productData.description}
                            onChangeText={onInputChange.bind(null,'description')}
                            placeholder='Product Description' />
                    </View>


                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Image Url</BasicText>
                        <TextInput style={styles.input}
                            defaultValue={productData.imageUrl}
                            onChangeText={onInputChange.bind(null,'imageUrl')}
                            keyboardType={Platform.OS=='ios'?'url':'default'}
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
        borderColor:Colors.dark,
        borderRadius:3
    },
    PriceInput:{
        width:200
    },

    errorMessage:{
           color: Colors.danger,
           paddingVertical:0,
           fontSize:18,

    },
    label:{
         fontSize:18,
    }
})

export default Inputitems;
