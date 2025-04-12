import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";

export default function Form(){
     const [Texto1, setTexto1] = useState('');
     const [Texto2, setTexto2] = useState('');
     const [Texto3, setTexto3] = useState('');
     const [mostrar, setMostrar] = useState (false);

     function mostrarTexto(){
        return(
        <View>
            <Text>
                TEXTO 1: {Texto1}
            </Text>
            <Text>
                TEXTO 2: {Texto2}
            </Text>
            <Text>
                TEXTO 3: {Texto3}
            </Text>
        </View>
        )
     }


    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="digite algo"
                onChangeText={setTexto1}
            />
            <TextInput
                style={styles.input}
                placeholder="digite algo"
                onChangeText={setTexto2}
            />
            <TextInput
                style={styles.input}
                placeholder="digite algo"
                onChangeText={setTexto3}
            />

            <TouchableOpacity style={styles.botaoz}><Text style={{color: "white"}}
            onPress={()=> {setMostrar(true)}}>APERTE AQUI </Text></TouchableOpacity>
            
            {mostrar ? mostrarTexto() : ''}
        
        </View>
    );
} 

const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 2,
        marginVertical: 10,    
    },
    text:{ 
        marginVertical: 10,
    },
    botaoz:{
        width: 150,
        height: 50,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
    }


})