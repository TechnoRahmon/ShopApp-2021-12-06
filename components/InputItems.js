import React,{useState, useEffect, useCallback } from 'react';
import {View,
        TouchableWithoutFeedback,
        TextInput,
        Keyboard,
        StyleSheet,
        Platform} from 'react-native';
import BasicText from './BasicText'
import isURL from 'validator/lib/isURL'
import isNumeric from 'validator/lib/isNumeric'
import Colors from './../constants/Colors'
import { addNewProduct , updateProduct  } from './../store/actions/productAction'
import {  useDispatch, useSelector  } from 'react-redux'


const Inputitems = ({ navigation , productId }) => {
    const { products } = useSelector(state=> state.product );
   
    const getSpecificProduct = ()=> products.find(item=> productId == item.id );
   
    const dispatch = useDispatch();
    const [ addMode , setAddMode ] = useState(true);

    const [productData , setProductData  ]= useState({
        title:'',
        price:'',
        description:'',
        imageUrl:''

    })

 const [DataValidator , setDataValidator ]= useState({
        title:'',
        price:'',
        description:'',
        imageUrl:''

    })

    const onInputChange=(type,text)=>{
        setProductData({ ...productData, [type] : text });
        if ( !text ){
            setDataValidator({...DataValidator , [type] :type+' is required '})

        }else if (type =='imageUrl' && !isURL(text)){
            setDataValidator({...DataValidator , [type] :'invalid URL!'})
        
        }else if ( type=='price' && !isNumeric(text)){
            setDataValidator({...DataValidator , [type] :'invalid price value!'})
        }else{
            setDataValidator({...DataValidator , [type] :''})
        }

       // console.log(text, ' ' , type );
    }

    const addItemHandler =  useCallback(()=>{
        const noError = !DataValidator.price&&!DataValidator.title&&!DataValidator.imageUrl&&!DataValidator.description;
        const DataExisit = productData.price&&productData.title&&productData.imageUrl&&productData.description;
        if ( noError && DataExisit ){   
            let id = products.length? Number(products[products.length-1].id.slice(1)) +1 : 'p1'; 
            dispatch(addNewProduct({
                id : id,
                title : productData.title,
                price: productData.price,
                description:productData.description,
                imageUrl:productData.imageUrl
            }));
            navigation.navigate('mange')
        }else{
            window.alert('All Fields Are Required !')
        }
    },[productData ,dispatch])


    const updateItemHandler =  useCallback(()=>{
        const noError = !DataValidator.price&&!DataValidator.title&&!DataValidator.imageUrl&&!DataValidator.description;
        const DataExisit = productData.price&&productData.title&&productData.imageUrl&&productData.description;
      
        if ( noError && DataExisit ){   
            let id = products.length? Number(products[products.length-1].id.slice(1)) +1 : 'p1'; 
            dispatch(updateProduct(  productId,{
                id :productId,
                title : productData.title,
                price: productData.price,
                description:productData.description,
                imageUrl:productData.imageUrl
            }));
            navigation.navigate('mange')
        }else{
            window.alert('All Fields Are Required !')
        }
    },[productData ,dispatch])

    useEffect(()=>{
  
         navigation.setParams({addItem :addMode? addItemHandler:updateItemHandler   }); 
    },[addItemHandler])
      

    useEffect(()=>{
        let specificProduct = getSpecificProduct();
      
        if ( specificProduct ){
            setAddMode(false);
            setProductData({
               ...specificProduct
            })
        }else{
            setAddMode(true);
        }
    },[productId])

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                accessible={true}>

                <View style={styles.screen}>
                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Title</BasicText>
                        {DataValidator.title?<BasicText style={styles.errorMessage}>{DataValidator.title} </BasicText>:null}
                        <TextInput style={[styles.input,DataValidator.title&&{ borderColor :Colors.danger}]}
                        autoCapitalize='none'
                            defaultValue={productData.title}
                            onChangeText={onInputChange.bind(null,'title')}
                            autoCorrect={false}
                            placeholder='Product Title' />
                            
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Price</BasicText>
                        {DataValidator.price?<BasicText style={styles.errorMessage}>{DataValidator.price} </BasicText>:null}
                        <TextInput style={[styles.input, styles.PriceInput, DataValidator.price&&{ borderColor :Colors.danger}]}
                            autoCorrect={false}
                            
                            defaultValue={productData.price}
                            onChangeText={onInputChange.bind(null,'price')}
                            keyboardType='number-pad'
                            placeholder='Product Price' />
                            
                    </View>

                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Description</BasicText>
                        {DataValidator.description?<BasicText style={styles.errorMessage}>{DataValidator.description} </BasicText>:null}
                        <View style={[styles.textAreaContainer,DataValidator.description&&{ borderColor :Colors.danger}]}>
                            <TextInput style={[styles.textArea]}
                                autoCorrect={false}
                                numberOfLines={10}
                                multiline={true}
                                defaultValue={productData.description}
                                onChangeText={onInputChange.bind(null,'description')}
                                placeholder='Product Description' />
                               
                        </View>
                        
                    </View>


                    <View style={styles.inputRow}>
                        <BasicText style={styles.label}> Product Image Url</BasicText>
                        {DataValidator.imageUrl?<BasicText style={styles.errorMessage}>{DataValidator.imageUrl} </BasicText>:null}
                        <TextInput style={[styles.input,DataValidator.url&&{ borderColor :Colors.danger}]}
                            defaultValue={productData.imageUrl}
                            onChangeText={onInputChange.bind(null,'imageUrl')}
                            keyboardType={Platform.OS=='ios'?'url':'default'}
                            autoCorrect={false}
                            placeholder='Product Image Url' />
                             
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding : 5
    },
    inputRow:{
        marginVertical:10,
      
       
    },
    input:{
        height:40,
        padding:10,
        margin:5,
        borderWidth:1,
        borderColor:Colors.dark,
        borderRadius:3
    },
    textAreaContainer:{
        padding:5,
        borderWidth:1,
        borderColor:Colors.dark,
        borderRadius:3,
        
    },
    textArea:{
        height:150,
        justifyContent: 'flex-start',
        textAlignVertical:'top'
    },
    PriceInput:{
        width:200
    },

    errorMessage:{
           color: Colors.danger,
           paddingVertical:0,
            paddingHorizontal:5

    },
    label:{
         fontSize:18,
    }
})

export default Inputitems;
