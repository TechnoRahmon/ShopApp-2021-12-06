import React from 'react';
import {View, StyleSheet ,Text, ImageBackground , Button   } from 'react-native';

import BasicText from './BasicText'
import Colors from './../constants/Colors'


const Productitem = ({ item , navigation }) => {
    console.log(item);
    return (
        <View style={styles.Item}> 

        <View style={styles.header}>
            <ImageBackground  source={{uri:item.imageUrl}} style={styles.Image}>

            </ImageBackground>

        </View>
          <View style={styles.Row}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
          </View>
            <View style={styles.Row}>
     <View style={styles.details}> 
                   
                    <BasicText style={styles.text}>$ {item.price} </BasicText>
                </View>
                <View style={styles.button}>
                    <Button title='Details' color={Colors.accent}
                        onPress={()=>{ navigation.navigate('productsDetails',{productName:item.title, productId:item.id})}} />
                </View>
               
           
                
                <View style={styles.button}> 
                    <Button title='Cart' color={Colors.accent}
                        onPress={()=>{ navigation.navigate('cart')}} />
                </View>
            </View>

           
        </View>
    );
}

const styles = StyleSheet.create({
    Item:{
        width:'100%',
        height:350,
        backgroundColor:Colors.light , 
        marginVertical:20,
        paddingBottom:10
        
    },
    header:{
        height:'80%'
    },
    title:{
        fontSize:20,
        fontFamily:'share-bold'
    },
    text:{
        fontSize:18
    },
    Image:{
        width:'100%',
        height:'100%'
    },  
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },  
    details:{
       flex:1
    },  
    Row:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
      
    }
})

export default Productitem;
