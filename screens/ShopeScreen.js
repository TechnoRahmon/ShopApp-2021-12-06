import React from 'react';
import {View, StyleSheet,Text, FlatList } from 'react-native';
import { PRODUCTS } from './../data/dummy_data'
import ProductItem  from './../components/ProductItem'
import Card  from './../components/Card'

import Colors from './../constants/Colors'

// action fucntion 
import { updateCart } from './../store/actions/cartAction'
// react redux Hooks 
import {useSelector,useDispatch} from 'react-redux'


const Shopescreen = ({ navigation }) => {
    
    // retriving data from redux store 
    const {cart  } = useSelector(state=> state.cart ); 

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
                leftButton={{text:'Details' ,onClick:()=>{ navigation.navigate('prodcutDetails')}}}   
                rightButton={{text:'Cart' ,onClick:()=>{ updateCurrentCart(itemData.item)}}}   
                navigation={navigation} /></Card>


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
       
        backgroundColor:Colors.gray
      
    },
    card:{
        marginHorizontal:10,
        marginVertical:10
    }
})

export default Shopescreen;
