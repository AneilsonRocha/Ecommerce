import React from 'react';
import {View,Image,StyleSheet} from 'react-native'

export function Avatar(){
    return(
        <View style={styles.container}>
          <Image style={styles.avatar}
           source={require('../assents/usuario.png')}
          />  
            
        </View>
    );
}
export const styles= StyleSheet.create({
   
    avatar: {
        height: 60,
        width: 60,
        borderRadius:2,
        top: 7,
        marginLeft: 20
    

         
    },
    

})