import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'



// header Buttons
import {Item , HeaderButtons } from 'react-navigation-header-buttons'
import HeaderButton from './../../components/HeaderButton'

// drawer action
import { DrawerActions } from '@react-navigation/native'

//screen
import ShopScreen from './../../screens/ShopeScreen'
import ProductDetails from './../../screens/ProductDetails'
import ShopCart from './../../screens/ShopCart'
import Colors from './../../constants/Colors';

const Stack = createNativeStackNavigator();

const Shopestack = ({navigation}) => {
  
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle:styles.headerStyle,
        headerTitleStyle:{fontFamily:'share-bold' , fontSize:22},
        animation:'none'
      }}
      >
          
          {/* shop screen */}
          <Stack.Screen name="shopeHome" component={ShopScreen}
            options={{ title:"Shope", 
                     
                     
                      headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                          <Item title="Drawer" iconName="menu"  onPress={()=>{
                              navigation.dispatch(DrawerActions.toggleDrawer())
                          }} />

                      </HeaderButtons>,

                    headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Drawer" iconName="cart-outline"  onPress={()=>{
                        navigation.navigate('cart')
                    }} />

                    </HeaderButtons>
                      }} />

            <Stack.Screen name="productDetails" component={ProductDetails}
                options={({route})=>({title:route.params.productName  })}
            />

               <Stack.Screen name="cart" component={ShopCart}
                options={{title:'Shop Cart'}}
            />


      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor:Platform.OS==='android'? Colors.primary:'#fff'
  }
})

export default Shopestack;
