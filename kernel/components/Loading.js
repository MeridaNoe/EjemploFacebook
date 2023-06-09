import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Overlay } from '@rneui/base-edge'
import { ActivityIndicator } from 'react-native'
//if ternario
export default function Loading(props) {
    console.log(props)
    const {show,text}=props
  return (
    <Overlay isVisible={show} windowsBackgroundColor='rgb(0,0,0,0.5)' overlayBackgroundColor='transparent'overlayStyle={styles.overlay}>
        
        <View style={styles.container}>
            <ActivityIndicator
                size='large'
                color='#007bff'
            />
            {text && <Text style={styles.text}>{text}</Text>}
            {/* SI ES TRUE LO CORRE SINO NO EXISTE */}
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height:160,
        width:250,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        justifyContent:'center',
        allignItems:'center'
    },
    container:{
        flex:1,
        justifyContent:'center',
        allignItems:'center'
    },
    text:{
        color:'#007bff',
        textTransform:'uppercase',
        marginTop:10,
        textAlign:'center'
    }
})