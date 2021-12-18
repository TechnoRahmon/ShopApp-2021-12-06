import React from 'react';
import {View, StyleSheet,Text, FlatList } from 'react-native';
import { PRODUCTS } from './../data/dummy_data'
import ProductItem  from './../components/ProductItem'
import Card  from './../components/Card'

import Colors from './../constants/Colors'
import DataNotFound from './../components/DataNotFound'
// action fucntion 
import { updateCart } from './../store/actions/cartAction'
// react redux Hooks 
import {useSelector,useDispatch} from 'react-redux'


const Shopescreen = ({ navigation }) => {
    
    // retriving data from redux store 
    const {cart  } = useSelector(state=> state.cart ); 
    const {products } = useSelector(state =>state.product );

    const dispatch = useDispatch();

    const updateCurrentCart=(selectedItem )=>{
        const exisitItem = cart.findIndex((item)=> item.data.id === selectedItem.id );
        console.log('exisitItem' , exisitItem );
        let newCart = cart ; 
        if ( exisitItem<0 ){
             newCart = [ ...cart, { data : selectedItem , amount : 1 } ]
            dispatch(updateCart(newCart))
        }else {
            ++newCart[exisitItem].amount
            dispatch(updateCart(newCart))
        }
        navigation.navigate('cart')
    }

    const renderProduct =(itemData)=><Card style={styles.card}><ProductItem 
                item={itemData.item} 
                leftButton={{text:'Details' ,onClick:()=>{ navigation.navigate('productDetails',
                        {productName:itemData.item.title, productId: itemData.item.id })}}}   
                rightButton={{text:'Cart' ,onClick:()=>{ updateCurrentCart(itemData.item)}}}   
                navigation={navigation} /></Card>
   
    //render if cart is empty !
    if ( !products.length ){
        return(
            <DataNotFound 
                buttonTitle='To Mange' 
                text='There is no Products Found' 
                CustomButtonHandler={()=>{
                    navigation.navigate('mageStack')
                }} />
        )
    }
    

    return ( <View style={styles.screen}>
                <FlatList style={{width:'100%'}}
                    renderItem={renderProduct}
                    data={products} />
            </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignContent:'center',
       
        backgroundColor:Colors.gray
      
    },
    card:{
        marginHorizontal:10,
        marginVertical:10
    }
})

export default Shopescreen;
