import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props{ //define as propriedades que estamos passando
    title: string;
    onPress: () => void
}

export default function CustomButton ({title, onPress} : Props){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    );
} 

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: '15%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 24,
    },
    text:{
        color: 'white',
        textAlign:'center',
    }

})