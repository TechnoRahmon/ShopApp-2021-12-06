
import React from 'react';
import {View,
        Text,
        ScrollView,
         StyleSheet} from 'react-native';


import {useSelector} from 'react-redux'


import DataNotFound from './../components/DataNotFound'
import Colors from './../constants/Colors'
import Panel from './../components/Panel'
import BasicText from './../components/BasicText'
import { PRODUCTS } from './../data/dummy_data'

const Ordersscreen = ({ navigation }) => {

    const { orders } = useSelector(state=> state.order);
    const findItem =(currentProduct)=> PRODUCTS.find((product, index )=> product.id === currentProduct.productId );


    
    //render Order Items 
    const RenderOrderITems = ({item})=>{
            return(
            
                <Panel createdAt={item.createdAt} total={item.total} >
                    <View stlye={styles.panelBody}>
                                
                                {item.orderItems.map((prodcut, index )=>{
                                    let itemInfo = findItem(prodcut)
                                    return(
                                        <View key={index} style={styles.itemContainer}>
                                            <BasicText style={styles.itemTitle}>{itemInfo.title}</BasicText>
                                            <BasicText style={styles.price} >x{prodcut.amount}</BasicText>
                                            <BasicText style={styles.price} >${itemInfo.price}</BasicText>
                                        </View>
                                    )
                                })}
                                
                                {/* summary card */}
                                <View style={styles.summaryRow}>
                                    <BasicText style={styles.summaryText}>Subtotal</BasicText>
                                    <BasicText style={styles.price} >${item.subtotal}</BasicText>
                                </View>

                                <View style={styles.summaryRow}>
                                    <BasicText style={styles.summaryText}>Shipping Cost</BasicText>
                                    <BasicText style={styles.price} >${item.shipping}</BasicText>
                                </View>

                                
                                <View style={styles.summaryRow}>
                                    <BasicText style={styles.summaryText}>Taxes</BasicText>
                                    <BasicText style={styles.price} >${item.taxes}</BasicText>
                                </View>
                            
                        
                    </View>
                </Panel>
                
            )
    }
    // if there is no orders  found
    if ( !orders.length ){
        return(
            <DataNotFound text='No Orders Found, you can start shopping now!' buttonTitle='To Shop' 
                CustomButtonHandler={()=>{navigation.navigate('shopeStack')}} />
        )
    }


    return (
            <ScrollView>
                <View style={styles.screen}>
                    {orders.map((order,index)=>  <RenderOrderITems key={index} item={order} />)}
                
                </View>
            </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.gray
    },
    summaryRow:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:Colors.lightGray,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical:15 ,
        paddingHorizontal:20,
        
    },
    summaryText:{
        fontSize:20,
        color:Colors.darkGray
    },
    price:{
        fontSize:18,
        color:Colors.darkGray
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:Colors.lightGray,
        paddingVertical:10,
        paddingHorizontal:20,
    },
    itemTitle:{
        fontSize:20,
        color:Colors.darkGray,
        width:'50%',
      
    }
    
    
})

export default Ordersscreen;
