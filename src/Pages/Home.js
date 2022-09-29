import React from 'react';
import { View,Text,TextInput,TouchableOpacity,ScrollView,Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {styles}  from './style';
import { Avatar } from '../usuario/index';
import { cores } from '../colors/Paletas';
import Plants from '../Botoes/index';

export default function Home() {

    const navigation = useNavigation();

 return (
    <View style={styles.container}>
           
    <View style={styles.footer}>
        <View >
            <Text style={styles.title1}>
             Plantas para sua {'\n'}
             Casa verde
            </Text>
            
        </View>
        <Avatar />
    
    </View>
    <View style={styles.barra}>
      
        <TextInput  placeholder='Pesquisar' style={{backgroundColor: 'white',marginHorizontal: 30,borderRadius: 15,width: 230,height: 60,}} />
        
    <View style={{justifyContent:'center',marginRight: 13,backgroundColor: '#181818',borderRadius: 17}}>
    <TouchableOpacity style={{width:60,height:30}}>
        <View style={{alignItems: 'center',bottom: 3}}>
    <MaterialIcons 
                    name= "filter-list"
                    size={40}
                    color= '#FFFFFF'
                    

                />
     </View>
    </TouchableOpacity>         
    </View>
  
    </View>

   
        <ScrollView horizontal>

        <View style={styles.containerr}>
        <TouchableOpacity style={[styles.buttonn,{backgroundColor: cores.colors.green,justifyContent: 'space-around'}]}  >
             <Text style={styles.text}>Todas </Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.buttonn,{backgroundColor: '#fff', justifyContent: 'space-around',marginHorizontal: 13}]}  >
             <Text style={[styles.text,{color:cores.colors.cinzatwo}]}>Cactus</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.buttonn,{backgroundColor: '#fff', justifyContent: 'space-around',marginHorizontal: 2}]}  >
             <Text style={[styles.text,{color:cores.colors.cinzatwo}]}>Flores</Text>
         </TouchableOpacity>
        </View>
        
        </ScrollView>

        <ScrollView horizontal style={{flexDirection:'row',marginBottom: 150,marginHorizontal: 20} }>
        <View style={{flexDirection: 'row',alignItems:'center'}} >
            <TouchableOpacity style={{backgroundColor:'#ffff',width:170,height:230,borderRadius:17} } onPress={() => navigation.navigate('Sobre')} >
              <View style={{backgroundColor:cores.colors.dark,width: 150,height:150,alignItems:'center',borderRadius:40,marginHorizontal:8,top:5}}>
              <Image source={require('../assents/cactus1.png')}
               style={{width:100,height:120,borderRadius:30,justifyContent:'center'}} />
               
              </View>
              <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.cinzatwo,top: 3}}>Interna</Text>
                   <Text style={{fontWeight:'bold',top:3,left:40}}> R$ 39,90</Text>

               </View>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.dark,top: 3,fontWeight:'bold',fontSize:25,top:10}}>Cactus1</Text>
                   <View style={{top: 12,marginHorizontal: 30}}>

                    <MaterialIcons 
                    name= "grade"
                    size={30}
                    color= '#FDDD35'
                 
                />
                </View>
                
               </View>
            </TouchableOpacity>
            
        </View>
        <View style={{flexDirection: 'row',alignItems:'center',marginHorizontal: 55}}>
            <TouchableOpacity style={{backgroundColor:'#ffff',width:170,height:230,borderRadius:17} } onPress={() => navigation.navigate('Sobre')}>
              <View style={{backgroundColor:cores.colors.dark,width: 150,height:150,alignItems:'center',borderRadius:40,marginHorizontal:8,top:5}}>
              <Image source={require('../assents/cactus2.png')}
               style={{width:100,height:120,borderRadius:30,justifyContent:'center',top: 12}} />
               
              </View>
              <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.cinzatwo,top: 3}}>Interna</Text>
                   <Text style={{fontWeight:'bold',top:3,left:40}}> R$ 23,50</Text>

               </View>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.dark,top: 3,fontWeight:'bold',fontSize:25,top:10}}>Cactus2</Text>
                   <View style={{top: 12,marginHorizontal: 30}}>

                    <MaterialIcons 
                    name= "grade"
                    size={30}
                    color= '#f1f1f1'
                 
                />
                </View>
                
               </View>
            </TouchableOpacity>
            
        </View>
        <View style={{flexDirection: 'row',alignItems:'center',marginHorizontal:15}}>
            <TouchableOpacity style={{backgroundColor:'#ffff',width:170,height:230,borderRadius:17}} onPress={() => navigation.navigate('Sobre')}  >
              <View style={{backgroundColor:cores.colors.dark,width: 150,height:150,alignItems:'center',borderRadius:40,marginHorizontal:8,top:5}}>
              <Image source={require('../assents/flores1.png')}
               style={{width:100,height:120,borderRadius:30,justifyContent:'center',top: 12}} />
               
              </View>
              <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.cinzatwo,top: 3}}>Interna</Text>
                   <Text style={{fontWeight:'bold',top:3,left:40}}> R$ 54,90</Text>

               </View>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color: cores.colors.dark,top: 3,fontWeight:'bold',fontSize:25,top:10}}>Flor</Text>
                   <View style={{top: 12,marginHorizontal: 70}}>

                    <MaterialIcons 
                    name= "grade"
                    size={30}
                    color= '#f1f1f1'
                 
                />
                </View>
                
               </View>
            </TouchableOpacity>
         
        </View>
        </ScrollView>

        <Text style={{fontSize: 26,fontWeight:'bold',bottom:140,marginHorizontal: 20}}>Populares</Text>

        <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'}}>
            
            <TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#181818',bottom: 120,marginHorizontal:20,borderRadius: 13}}>
            <Image source={require('../assents/flores1.png') }  style={{width:70,height:77}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#181818',bottom: 120,marginHorizontal:20,borderRadius: 13}}>
            <Image source={require('../assents/cactus2.png') }  style={{width:70,height:77}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#181818',bottom: 120,marginHorizontal:20,borderRadius: 13}}>
            <Image source={require('../assents/cactus1.png') }  style={{width:70,height:77}}/>
            </View>
            </TouchableOpacity>
        </View>
        
        <View style={{width:1000,height:60,backgroundColor:'#fff',borderRadius:13}}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width:90,height:30}}>
            <View style={{alignItems: 'center',top:7,marginHorizontal:20}}>
            <MaterialIcons 
                    name= "home"
                    size={40}
                    color= '#181818'
                    

                />
                <Text style={{bottom: 5}}>Inicio</Text>
     </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width:105,height:30}}>
            <View style={{alignItems: 'center',top:7,marginHorizontal:20}}>
            <MaterialIcons 
                    name= "grade"
                    size={40}
                    color= '#D9D9D9'
                    

                />
                <Text style={{bottom: 5}}>Favoritos</Text>
     </View>
    </TouchableOpacity> 
                </View>
                <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width:105,height:30}}>
            <View style={{alignItems: 'center',top:7,marginHorizontal:20}}>
            <MaterialIcons 
                    name= "shopping-cart"
                    size={40}
                    color= '#D9D9D9'
                    

                />
                <Text style={{bottom: 5}}>Carinho</Text>
     </View>
    </TouchableOpacity> 
                </View>
                <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width:105,height:30}}>
            <View style={{alignItems: 'center',top:7,marginHorizontal:20}}>
            <MaterialIcons 
                    name= "perm-identity"
                    size={40}
                    color= '#D9D9D9'
                    

                />
                <Text style={{bottom: 5}}>Perfil</Text>
     </View>
    </TouchableOpacity> 
                </View>
                
            </View>
           
        </View>
 
</View>
   
  );
}


