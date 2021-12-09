import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Colors from './../../constants/Colors';

// header Buttons
import {Item , HeaderButtons } from 'react-navigation-header-buttons'
import HeaderButton from './../../components/HeaderButton'

// drawer action
import { DrawerActions } from '@react-navigation/native'

//screen
import MangeProductsScreen from './../../screens/MangeProductsScreen'
import EditProducts from './../../screens/EditProducts'

const Stack = createNativeStackNavigator();

const MangeStack = ({navigation}) => {
  
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle:styles.headerStyle,
        headerTitleStyle:{fontFamily:'share-bold' , fontSize:22},
        animation:'none'
      }}
      >
          
          {/* mange screen */}
          <Stack.Screen name="mange" component={MangeProductsScreen}
            options={{ title:"Mange Products", 
                     
                     
                      headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                          <Item title="Drawer" iconName="menu"  onPress={()=>{
                                              navigation.dispatch(DrawerActions.toggleDrawer())
                                          }} />

                                    </HeaderButtons>,
                      headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                        <Item title="Drawer" iconName="ios-add-circle-outline"  onPress={()=>{
                                            navigation.navigate('editProduct')
                                        }} />

                                  </HeaderButtons>,

                      }} />


        {/* Edit Products screen */}
          <Stack.Screen name="editProduct" component={EditProducts}
            options={{ title:"Edit Products", 
                      headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                        <Item title="Drawer" iconName="checkmark-circle-outline"  onPress={()=>{
                                            navigation.navigate('mange')
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

export default MangeStack;
