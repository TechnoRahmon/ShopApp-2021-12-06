import React from 'react';
import {View,
        Text,
        FlatList,
        StyleSheet} from 'react-native';

import {PRODUCTS } from './../data/dummy_data'
import Colors from './../constants/Colors'
import Card from './../components/Card'
import ProductItem from './../components/ProductItem'
import DataNotFound  from './../components/DataNotFound'
import { useSelector, useDispatch  } from 'react-redux'
import { deleteProduct } from './../store/actions/productAction'

const Mangeproductsscreen = ({navigation}) => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product );


  const renderProduct =(itemData)=><Card style={styles.card}><ProductItem 
        item={itemData.item} 
        leftButton={{text:'Edit' ,onClick:()=>{ navigation.navigate('editProduct',
                {productId: itemData.item.id })}}}   
        leftBtnColor={{bg:Colors.darkGray , color:Colors.dark}}
        rightBtnColor={{bg:Colors.danger , color:Colors.dark}}
        divider={true}
        rightButton={{text:'Delete' ,onClick:()=>{dispatch(deleteProduct(itemData.item.id)) }}}   
        navigation={navigation} /></Card>

    // if Product list is empty
    if ( !products.length ){
      return(
        <DataNotFound  text='No Product Found, Try with adding new product!' buttonTitle='New Product'
            CustomButtonHandler={()=>{ navigation.navigate('editProduct')}} />
      )
    }

    // if Proudct list has Data
    return (
        <View style={styles.screen}>
            <FlatList style={{width:'100%'}}
              data={products}
                renderItem={renderProduct}
              />
        </View>
    );
}






const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignContent:'center',
   
    backgroundColor:Colors.gray
  }
})

export default Mangeproductsscreen;
