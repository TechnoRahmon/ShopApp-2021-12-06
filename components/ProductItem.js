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

        <View style={styles.details}> 

            <View style={styles.Row}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
            
                   
            <BasicText style={styles.text}>$ {item.price} </BasicText>
          
       
               
           
            <View style={styles.Row}>
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
    </View>
    );
}

const styles = StyleSheet.create({
    Item:{
        width:'100%',
       height:450,
        backgroundColor:'#fff' , 
        marginVertical:20,
        paddingBottom:10
        
    },
    header:{
        height:'70%'
    },
    title:{
        fontSize:20,
        fontFamily:'share-bold',
      
        width:'100%'
    },
    text:{
        fontSize:18,
        marginBottom:10
    },
    Image:{
        width:'100%',
        height:'100%'
    },  
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink:1,
        marginBottom:15
    },  
    details:{
       flex:1,
       height:'30%',
       justifyContent: 'center',
       paddingHorizontal:15
    },  
    Row:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:10
      
    }
})

export default Productitem;
