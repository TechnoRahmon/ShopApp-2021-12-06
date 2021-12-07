import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'

//Nav Config 
import { NavigationContainer } from '@react-navigation/native'
// Drawer config
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

// nav Stacks 
import ShopStack from './components/Stacks/ShopeStack'
import OrderStack from './components/Stacks/OrdersStack'

// redux 
import { Provider } from 'react-redux'
import Store from './store/store'

// load the font function
const fetchFont =()=>{
  return Font.loadAsync({
     'share':require('./assets/fonts/Share-Regular.ttf'),
     'share-bold':require('./assets/fonts/Share-Bold.ttf')
   })
}

// enbleScreen to optmize performance 
enableScreens(); 

export default function App() {

  const [ fontLoaded , setFontLoaded ] = useState(false);

  if( !fontLoaded){
    return <AppLoading 
              startAsync={fetchFont}
              onError={console.log}
              onFinish={()=>{setFontLoaded(true)}}
            />
  }

  return (
    <Provider store={Store} >
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="shopeStack" component={ShopStack} 
                  options={{unmountOnBlur:true, title:"Shop", headerShown:false, animationEnabled:false }}/>
 
                <Drawer.Screen name="orderStack" component={OrderStack} 
                  options={{unmountOnBlur:true, title:"Orders", headerShown:false, animationEnabled:false }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
