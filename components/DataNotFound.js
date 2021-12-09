import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card'
import BasicText from './BasicText'
import CustomButton from './CustomButton'
import Colors from './../constants/Colors'

const Datanotfound = ({ text , buttonTitle, CustomButtonHandler  }) => {
    return (
        <View style={styles.screen}>
               
            <Card style={{...styles.card, flex:2}}>
                <View style={styles.itemContainer}>
                    <BasicText style={styles.alertText}>{text} </BasicText>
                    <CustomButton style={styles.button} onClick={CustomButtonHandler}>{buttonTitle} </CustomButton>
                </View>
            </Card>
       

        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.gray
    },
    card:{
        marginVertical:15,
        
    },
    itemContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:25 ,
        paddingHorizontal:10,
        flex:1
    },
    button:{
      
        backgroundColor:Colors.primary
    },
    alertText:{
        marginBottom:5
    }
})

export default Datanotfound;
