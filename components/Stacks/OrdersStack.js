import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'



// header Buttons
import {Item , HeaderButtons } from 'react-navigation-header-buttons'
import HeaderButton from './../../components/HeaderButton'

// drawer action
import { DrawerActions } from '@react-navigation/native'

//screen
import OrderScreen from './../../screens/OrdersScreen'
import Colors from './../../constants/Colors';

const Stack = createNativeStackNavigator();

const Orderstack = ({navigation}) => {
  
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle:styles.headerStyle,
        headerTitleStyle:{fontFamily:'share-bold' , fontSize:22},
        animation:'none'
      }}
      >
          
          {/* shop screen */}
          <Stack.Screen name="orders" component={OrderScreen}
            options={{ title:"Orders", 
                     
                     
                      headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                          <Item title="Drawer" iconName="menu"  onPress={()=>{
                              navigation.dispatch(DrawerActions.toggleDrawer())
                          }} />

                      </HeaderButtons>,

                      }} />


      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor:Platform.OS==='android'? Colors.primary:'#fff'
  }
})

export default Orderstack;
