import React from 'react';
import {View, StyleSheet,Text, FlatList } from 'react-native';
import { PRODUCTS } from './../data/dummy_data'
import ProductItem  from './../components/ProductItem'

import Colors from './../constants/Colors'

const Shopescreen = ({ navigation }) => {

    const renderProduct =(itemData)=><ProductItem item={itemData.item}    navigation={navigation} />


    return ( <View style={styles.screen}>
                <FlatList style={{width:'100%'}}
                    renderItem={renderProduct}
                    data={PRODUCTS} />
            </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignContent:'center',
        padding:15,
        backgroundColor:Colors.gray
      
    }
})

export default Shopescreen;
