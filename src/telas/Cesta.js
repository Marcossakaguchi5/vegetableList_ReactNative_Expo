import React from 'react';
import {StyleSheet,Image , Dimensions, Text, View} from 'react-native';

import green from '../../assets/green.jpg';
import logo from '../../assets/logo.png'

import Texto from '../components/Texto'
const width=Dimensions.get('screen').width;


export default function Cesta(){
    return <>
    <Image source={green} style={ estilos.topo }/>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verdura</Text>
        <View style={ estilos.fazenda}> 
            <Image style={estilos.imagemFazenda} source={logo}/>
    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
    <Texto style={estilos.descricao}>Uma cesta de produtos selecionados
        cuidadosamente da fazenda para sua cozinha
    </Texto>
    <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}
 
const estilos=StyleSheet.create({
    topo:{
        width:"100%",
        height :810/1440*width,
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16,

    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight:42,     
        fontFamily:"MontserratBold",
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },
    imagemFazenda:{
        width:32,
        height:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontFamily:"MontserratRegular"
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26,        
    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    }
});