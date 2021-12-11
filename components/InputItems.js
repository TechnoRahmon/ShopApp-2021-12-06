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
        url:''

    })

 const [DataValidator , setDataValidator ]= useState({
        title:'',
        price:'',
        description:'',
        url:''

    })

    const onInputChange=(type,text)=>{
        setProductData({ ...productData, [type] : text });
        if ( !text ){
            setDataValidator({...DataValidator , [type] :type+' is required '})

        }else if (type =='url' && !isURL(text)){
            setDataValidator({...DataValidator , [type] :'invalid URL!'})
        
        }else if ( type=='price' && !isNumeric(text)){
            setDataValidator({...DataValidator , [type] :'invalid price value!'})
        }else{
            setDataValidator({...DataValidator , [type] :''})
        }

       // console.log(text, ' ' , type );
    }



    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                accessible={true}>

                <View style={styles.screen}>
                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Title</BasicText>
                        {DataValidator.title?<BasicText style={styles.errorMessage}>{DataValidator.title} </BasicText>:null}
                        <TextInput style={[styles.input,DataValidator.title&&{ borderColor :Colors.danger}]}
                        autoCapitalize='none'
                            defaultValue={productData.title}
                            onChangeText={onInputChange.bind(null,'title')}
                            autoCorrect={false}
                            placeholder='Product Title' />
                            
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Price</BasicText>
                        {DataValidator.price?<BasicText style={styles.errorMessage}>{DataValidator.price} </BasicText>:null}
                        <TextInput style={[styles.input, styles.PriceInput, DataValidator.price&&{ borderColor :Colors.danger}]}
                            autoCorrect={false}
                            
                            defaultValue={productData.price}
                            onChangeText={onInputChange.bind(null,'price')}
                            keyboardType='number-pad'
                            placeholder='Product Price' />
                            
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Description</BasicText>
                        {DataValidator.description?<BasicText style={styles.errorMessage}>{DataValidator.description} </BasicText>:null}
                        <View style={[styles.textAreaContainer,DataValidator.description&&{ borderColor :Colors.danger}]}>
                            <TextInput style={[styles.textArea]}
                                autoCorrect={false}
                                numberOfLines={10}
                                multiline={true}
                                defaultValue={productData.description}
                                onChangeText={onInputChange.bind(null,'description')}
                                placeholder='Product Description' />
                               
                        </View>
                        
                    </View>


                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Image Url</BasicText>
                        {DataValidator.url?<BasicText style={styles.errorMessage}>{DataValidator.url} </BasicText>:null}
                        <TextInput style={[styles.input,DataValidator.url&&{ borderColor :Colors.danger}]}
                            defaultValue={productData.url}
                            onChangeText={onInputChange.bind(null,'url')}
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
    textAreaContainer:{
        padding:5,
        borderWidth:1,
        borderColor:Colors.dark,
        borderRadius:3,
        
    },
    textArea:{
        height:150,
        justifyContent: 'flex-start',
        textAlignVertical:'top'
    },
    PriceInput:{
        width:200
    },

    errorMessage:{
           color: Colors.danger,
           paddingVertical:0,
            paddingHorizontal:5

    },
    label:{
         fontSize:18,
    }
})

export default Inputitems;
