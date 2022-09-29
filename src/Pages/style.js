
import {StyleSheet} from 'react-native';
import { cores } from '../colors/Paletas';

export const styles= StyleSheet.create({
    container: {
        marginTop:13,
        flex:1,
        backgroundColor: cores.colors.fundo,
        width: '100%'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 30,
        
        
        
    },
    title1:{
        flexDirection:  'row',
        color: cores.colors.dark,
        fontWeight: 'bold',
        fontSize: 26
        
    },
    img : {
    height: 30,
    width: 30,
    borderRadius: '0px',
    },
    
    barra :{
        flexDirection: 'row',
        marginTop:30
    
    },
    containerr: {
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal:20
        
    },
    text:{
        marginTop: 9,
        color: '#ffff',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 20
      
    },
    buttonn : {
        width:150,
        height:60,
        borderRadius:22,
        flexDirection:'row',
        backgroundColor: 'green'

    }

})

