import React from 'react';
import { View,Image,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { cores } from '../../colors/Paletas';




export default function Sobre({navigation}) {
    
    
 return (
   <View style={styles.container}>
       <TouchableOpacity style={{width:60,height:50}} >
        <View style={{justifyContent:'flex-start',marginHorizontal: 10,top: 20}}>
        <MaterialIcons 
                    name= "keyboard-arrow-left"
                    size={50}
                    color= '#FFF'
                />
     </View>
    </TouchableOpacity>

    <View style={{flexDirection:'row',marginTop: 38,justifyContent: 'space-between'}}>
        <Text style={styles.title}> Cactus1</Text>
        <View style={{right: 20}}>
            <MaterialIcons 
                    name= "grade"
                    size={30}
                    color= '#FDDD25'
                />
        </View>

    </View>

    <View style={styles.line}></View>

    <View style={{flexDirection:'column',marginTop: 20,justifyContent:'space-between'}}>
        <View style={{marginHorizontal: 40}}>
        <Text style={{color:'#9D9D9D'}}>Categoria</Text>
        <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',bottom: 6}}>Interna</Text>
        </View>

        <View style={{marginHorizontal: 40,marginTop: 30}}>
        <Text style={{color:'#9D9D9D'}}>Tipo</Text>
        <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',bottom: 6}}>Pequeno</Text>
        </View>
        <View style={{marginHorizontal: 40,marginTop:30}}>
        <Text style={{color:'#9D9D9D'}}>Planta</Text>
        <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',bottom: 6}}>Cactus</Text>
        
        </View>
        
        <View style={{justifyContent:'flex-start',alignItems:'center',bottom: 180}}>
            <Image source={require('../../assents/cactus1.png')} 
                    style={{width: 165,height:220,left: 80}}/>
        </View>

        <View style={{bottom: 150,marginHorizontal: 38}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Sobre</Text>
            <Text style={{color: '#9D9D9D'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
            </Text>
        </View>

    </View>
    <View style={{flexDirection:'row',bottom: 100}}>
    <View style={{right: 20, width: 50, height: 50,borderRadius:29,backgroundColor:'#181818',marginHorizontal:70,justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginRight:50}}>
            <MaterialIcons 
                    name= "height"
                    size={35}
                    color= '#FFF'
                />
                
        </View>
        <View style={{top: 10,marginLeft:20}}>
        <Text style={{right: 90, bottom: 10,color: '#AD9D9D'}}>Altura</Text>
        <Text style={{right: 90, bottom: 10,fontWeight:'bold',color:'#181818'}}>15cm</Text>
        </View>
        <View style={{right: 20, width: 50, height: 50,borderRadius:29,backgroundColor:'#181818',marginHorizontal:70,justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
            <MaterialIcons 
                    name= "swap-horiz"
                    size={35}
                    color= '#FFF'
                />
                
        </View>
        <View style={{top: 10}}>
        <Text style={{right: 90, bottom: 10,color: '#AD9D9D'}}>Diâmetro</Text>
        <Text style={{right: 90, bottom: 10,fontWeight:'bold',color:'#181818'}}>08cm</Text>
        </View>
    </View>
    <View style={{flexDirection:'row',backgroundColor: '#fff',width:550,height:350,bottom:40}}>
        <View style={{marginHorizontal: 30,marginVertical: 13}}>
            <Text style={{color: '#AD9D9D',fontSize: 12}}>Preço</Text>
            <Text style={{fontWeight:'bold',fontSize:16}}>R$ 39,90</Text>

        </View>
        <View >
        <TouchableOpacity style={{width:239,height: 50,borderRadius:30,backgroundColor: cores.colors.green,top: 17}}>
            <Text style={{color: '#fff',textAlign:'center',top:13,fontWeight:'bold'}}>Comprar</Text>
        </TouchableOpacity>
        </View>

    </View>

   </View>
  );
}

export const styles= StyleSheet.create({
    container : {
        width: '100%',
        height: 430,
        backgroundColor: '#181818',
        marginTop: 40
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 20
    },
    line : {
        borderBottomColor: '#fff',
        borderBottomWidth: 8,
        marginBottom: 4,
        width: 100,
        marginHorizontal:30,
        borderRadius:5
    },


   
   
})