import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';


export default function Plants(props) {
 
 function filterDesc(desc) {
     if(desc.length < 25)
     return desc;

     return `${desc.substring(0,23)}...`
 }
 
    return (
    <TouchableOpacity style={styles.container}>
        <Image 
        source={props.img}
        style ={styles.shoesImg}
        />

        <Text style={styles.shoesText}> {filterDesc(props.children)} </Text>
            
            <View opacity={0.4}>
            
            <Text style={styles.ShoesText}>{props.cost}</Text>
            
            </View>
    
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2%',
        alignItems: 'center',
        justifyContent: ' center'
        
    },
    shoesImg: {
        width: 175,
        height:175
    },
    shoesText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})