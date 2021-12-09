import React ,{ useState, useRef  } from 'react';
import {View,
        Animated,
        TouchableHighlight,
        StyleSheet} from 'react-native';

import Card from './Card'
import BasicText from './BasicText'
import Colors from './../constants/Colors'

const Panel = ({ total,createdAt,  children }) => {

    const [ count , setCount ] = useState(null)
    const [ expanded , setExpanded ] = useState(false)
    const [ MinHeight, setMinHeight ] = useState();
    const [ MaxHeight , setMaxHeight ] = useState();
    const  animation = useRef(new Animated.Value(90)).current


    const toggle  =()=> {
       
        // set the initial value for the animation 
        let initailValue = expanded? MinHeight + MaxHeight : MinHeight ,
            finalValue = expanded ? MinHeight : MaxHeight + MinHeight ;
        
        setExpanded(state => !state)

        animation.setValue(initailValue);
        

        //We use the Animated.spring method to run the animation. This method does all the calculations and set the value for each frame to the Animated.Value instance we declared. We are also setting the end value of the animation, by using an object as a second parameter.
        //We call the start method to run all the calculations.
        Animated.timing(animation, { 
            duration: 200,
            useNativeDriver:false,
            toValue : finalValue }).start();

      
    }

    const _setMinHeight =(e)=>{
            setMinHeight(e.nativeEvent.layout.height)
    }

    const _setMaxHeight =(e)=>{
            setMaxHeight(e.nativeEvent.layout.height)
    }


    let toggleTitle = 'More';
    if ( expanded ){
        toggleTitle = 'Less'
    }
    
    return (
        <Animated.View style={[styles.Container , {height:animation}]}>
             <Card >
                <View style={styles.orderItem} onLayout={_setMinHeight}>
                        <BasicText style={styles.Total}>{total}</BasicText>

                        <TouchableHighlight underlayColor='#f1f1f1' onPress={toggle}>
                            <View style={styles.button}>
                                <BasicText style={styles.link}>{toggleTitle}  </BasicText>
                            </View>
                            
                        </TouchableHighlight>
                        
                        <BasicText style={styles.date}>{createdAt}</BasicText>

                </View>

                    
                <View style={styles.orderItemBody} onLayout={_setMaxHeight}>
                
                {children}
                </View>
       
            </Card>
            

        </Animated.View>
      
    );
}

const styles = StyleSheet.create({

   Container:{
       
    overflow: 'hidden',
   },
   button:{
    alignItems: "center",
    backgroundColor: Colors.accent,
    padding:8
   },
    orderItem:{
      
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
       
        paddingHorizontal:15,
        paddingVertical:25
    },
    orderItemBody:{
        width:'95%',
        marginHorizontal:10,
        backgroundColor:"#fff",
        padding :10,
        borderTopWidth:1,
        borderTopColor:Colors.gray
    },
    Total :{
        fontSize:20
    },
    link:{
        fontSize:18
    },
    date:{
        fontSize:18
    }

})

export default Panel;
