import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Example(){
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Esse é um componente de exemplo =D</Text>
        
            <Text style={styles.text}>REPETISSÃO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "violet",
    },
    text:{
        fontWeight: "bold",
    }       
})