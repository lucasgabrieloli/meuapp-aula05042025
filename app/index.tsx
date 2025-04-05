import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import {Text, View, Button, TextInput} from 'react-native';

export default function HomeScreen(){
  const name = "Lucas";

  const [nome, setName] = useState(name);
  const [count, setCount] = useState(0);

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bem-vindo ao app, {nome}!</Text>

        <Text>Contador: {count}</Text>
        <Button title="Aumentar"
        onPress={() => {setCount(count+1)}}/>
        <Button title="Diminuir"
        onPress={() => {setCount(count-1)}}/>
        <Button title="Resetar"
        onPress={() => {setCount(0)}}
        />

        <TextInput
        placeholder="Digite seu nome"
        onChangeText={setName}
        style={{borderColor: 'black', borderWidth: 2}}
        />

        <CustomButton title="Botão Teste"
          onPress={() => {setCount(count+1)}}
        />
        
    </View>
  ) 
}