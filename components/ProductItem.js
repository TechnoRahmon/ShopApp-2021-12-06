import React from 'react';
import {View, StyleSheet ,Text, ImageBackground , Button   } from 'react-native';

import BasicText from './BasicText'
import Colors from './../constants/Colors'


const Productitem = ({ item ,leftButton ,leftBtnColor ,divider, rightBtnColor, rightButton ,  navigation }) => {
    
    return (
        <View style={styles.Item}> 

        <View style={styles.header}>
            <ImageBackground resizeMode="contain" source={{uri:item.imageUrl}} style={styles.Image}>

            </ImageBackground>

        </View>

        <View style={styles.details}> 

            <View style={styles.Row}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
            
                   
            <BasicText style={styles.text}>$ {item.price} </BasicText>
          
       
               
           
            <View style={[styles.Row , divider&&styles.divider ]}>
                <View style={styles.button}>
                    <Button title={leftButton.text} color={(leftBtnColor&&leftBtnColor.bg)|| Colors.accent} 
                        onPress={leftButton.onClick} />
                </View>
                <View style={styles.button}> 
                    <Button title={rightButton.text}  color={(rightBtnColor&&rightBtnColor.bg) || Colors.accent}
                        onPress={rightButton.onClick} />
                </View>
            </View>

         </View> 
    </View>
    );
}

const styles = StyleSheet.create({
    Item:{
        width:'100%',
       height:350,
        backgroundColor:'#fff' , 
       
        paddingBottom:40,
        justifyContent:"space-between"
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
        height:'100%',
        position:'absolute',
       top:0
    },  
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink:1,
     
    },  
    details:{
     
      
       justifyContent: 'center',
       paddingHorizontal:15
    },  
    Row:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
       
      
    },
    divider:{
        borderTopWidth:1,
        borderTopColor:Colors.gray,
        paddingTop:10
    }
})

export default Productitem;
