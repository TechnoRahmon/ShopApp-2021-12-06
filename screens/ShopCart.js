import React,{ useState , useEffect , useRef  } from 'react';
import {View,
     StyleSheet,
     Image,
     ScrollView,
      Text} from 'react-native';
import Card from './../components/Card'
import BasicText from './../components/BasicText'
import CustomButton from './../components/CustomButton'
import Colors from '../constants/Colors';
import { PRODUCTS } from './../data/dummy_data'
import NumericInput  from './../components/NumericInput'

// action function
import { updateCart } from './../store/actions/cartAction'
import { addOrder } from './../store/actions/orderAction'
// redux
import { useDispatch , useSelector } from 'react-redux'

//Order model 
import Order from './../models/Orders'

const Shopcart = ({ navigation }) => {

    const dispatch = useDispatch();
    // retriving data 
    const { cart } = useSelector(state=> state.cart );
    const { orders } = useSelector(state => state.order );

    // getTotal of cart's items 
    const getTotal =()=>{
        let initialValue=0;
        if ( cart.length ){
            return cart.reduce((p,c)=> (p)+(c.amount*c.data.price),initialValue)
        }
        return 0
    }

    
    const [Subtotal , setSubtotal ] = useState(getTotal());
    const [Taxes , setTaxes ] = useState(Math.floor(Subtotal*0.75));
    const [Shipping , setShipping ] = useState(10);
    const [Total , setTotal ] = useState(Subtotal+Taxes+Shipping);
    
    

    const createNewOrder= ()=>{
        let id =orders.length?'o'+( Number(orders[orders.length-1].id.slice(1))+1):'o1' ; 
        let orderItems = cart.map(item=>{ return {['item'+item.data.id]: {amount:item.amount } }}) ; 
        let newOrder = new Order(id , Total , orderItems , Subtotal, Taxes , Shipping ); 
        //console.log('newOrder' , newOrder );
        dispatch(addOrder(newOrder))
    }

    console.log('Orders ..: ' , orders );

    /* Use Effect  */
    useEffect(()=>{
        setTotal(Subtotal+Shipping+Taxes)
        setTaxes(Math.floor(Subtotal*0.2))
       
    },[Subtotal])

    console.log('Orders : ',orders );
    /******************************* */

    // update current cart items 
    const updateCurrentCart=(selectedItem,type )=>{
        const ItemIndex = cart.findIndex((item)=> item.data.id === selectedItem.id );
        console.log('exisitItem' , ItemIndex );
        let newCart = cart ; 
        if ( type=='+' ){
            ++newCart[ItemIndex].amount

            dispatch(updateCart(newCart))

        }else if ( type =='-' && newCart[ItemIndex].amount ==1) {
            console.log('removing .. . . .. .');
            newCart.splice(ItemIndex,1)
            console.log(newCart);
            dispatch(updateCart(newCart))

        }else if ( type == '-'){
            --newCart[ItemIndex].amount
            dispatch(updateCart(newCart))
        }
        setSubtotal(getTotal());
        console.log('Total : ********',getTotal());

    }


    const RenderCartItem= ({ item })=>{
            return(
            
                    <View style={styles.itemRow}>
                        <View style={styles.imageBox}>
                            <Image source={{uri:item.data.imageUrl}} style={styles.image} />
                        </View>
                        

                        <View style={styles.infoBox}>
                            <Text style={styles.title} numberOfLines={1}>{item.data.title} </Text>
                            <View style={styles.Row}>
                                <BasicText style={styles.price}>$ {item.data.price}</BasicText>
                                <NumericInput value={item.amount} cartUpdate={updateCurrentCart.bind(null, item.data)}  />
                            </View>
                        </View>
                    </View>      
            
            )
        }


    //render if cart is empty !
    if ( !cart.length ){
        return(
            <View style={styles.screen}>
               
                        <Card style={{...styles.card, flex:2}}>
                            <View style={styles.itemContainer}>
                                <BasicText style={styles.alertText}>Cart is empty, start shoping now </BasicText>
                                <CustomButton style={styles.button} onClick={()=>{
                                    navigation.navigate('shopeHome')
                                }}>To Shop </CustomButton>
                            </View>
                        </Card>
                       
               
            </View>
        )
    }
    
    //render  if cart has data  !
    return (
       
            <View style={styles.screen}>
                 <ScrollView style={{flex:1}}>

                     {/* carts item */}
                    <Card style={styles.card}>
                        { cart.map((item,index)=> <RenderCartItem key={index} item={item} />) }

                    </Card>
                    
                    {/* summary card */}
                    <Card style={styles.card}>
                      

                            <View style={styles.summaryRow}>
                                <BasicText style={styles.summaryText}>Subtotal</BasicText>
                                <BasicText style={styles.price} >${Subtotal}</BasicText>
                            </View>

                            <View style={styles.summaryRow}>
                                <BasicText style={styles.summaryText}>Shipping Cost</BasicText>
                                <BasicText style={styles.price} >${Shipping}</BasicText>
                            </View>

                            
                            <View style={styles.summaryRow}>
                                <BasicText style={styles.summaryText}>Taxes</BasicText>
                                <BasicText style={styles.price} >${Taxes}</BasicText>
                            </View>

                            <View style={styles.summaryRow}>
                                <Text style={styles.title}>Total</Text>
                                <BasicText style={styles.title} >${Total}</BasicText>
                            </View>
                       
                    </Card>

                    <CustomButton style={styles.button} onClick={createNewOrder} >Proceed </CustomButton>
                </ScrollView>
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
    itemRow:{
        flexDirection:'row',
       height:100,
       alignItems: 'center',
       overflow: 'hidden',
      
       borderBottomWidth:1,
       borderBottomColor:Colors.lightGray,
      
       paddingVertical:25 ,
       paddingHorizontal:10,
    },
    title:{
        fontSize:20,
        fontFamily:'share-bold',
        color:Colors.dark
    },
    price:{
        fontSize:18,
        color:Colors.darkGray
    },
    infoBox:{
       alignItems: 'center',
        flex:3
    },
    Row:{
        flexDirection:'row',
        alignItems: 'center',
        width:'90%',
        justifyContent:'space-between',
       

    },
    imageBox:{
        width:90,
        height:90,
        flex:1,
    },
    image:{
       
        width:'100%',
       height:90
    },
    itemContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:25 ,
        paddingHorizontal:10,
        flex:1
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
    button:{
      
        backgroundColor:Colors.primary
    },
    alertText:{
        marginBottom:5
    }

})

export default Shopcart;
