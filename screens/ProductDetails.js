import React from 'react';
import {View, StyleSheet,Text , Image, ScrollView  } from 'react-native';

import { PRODUCTS } from './../data/dummy_data'
import BasicText from './../components/BasicText'
import CustomButtom  from './../components/CustomButton'
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux'

const Productdetails = ({ route , navigation }) => {
    const { products } = useSelector(state => state.product)
    const {productId } = route.params;

    const getItem =  products.find(item=> item.id === productId );


    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.imageBox}>

                     <Image resizeMode="contain" source={{uri:getItem.imageUrl}} style={styles.image} />
                </View>
                   
              
                <Text style={styles.title}> {getItem.title}  </Text>
                <BasicText style={styles.price}>$ {getItem.price} </BasicText>
                <BasicText style={styles.text}>{getItem.description}</BasicText>
                <CustomButtom style={styles.button} onClick={()=>{
                        navigation.navigate('cart')
                }}> 
                    To Cart
                </CustomButtom>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignContent:'center'
    },
    image :{
       
       width:"100%",
        height:300
    },
    imageBox:{
        backgroundColor:'#fff'  ,
        flex:1
    },
    title:{
        fontFamily:'share-bold',
        fontSize:22,
        padding :5
    },
    price:{
        fontSize:20,
        marginBottom:5,
        padding :5
    },
    text:{
        lineHeight:25,
        fontSize:18,
        padding :5

    },
    button:{
        backgroundColor:Colors.accent,
        
    }
})

export default Productdetails;
