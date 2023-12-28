import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NextScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    // Você pode realizar qualquer lógica adicional aqui, se necessário

    // Navegar para a próxima tela (outra tela ou a mesma tela com diferentes parâmetros)
    navigation.navigate('Next', { inputValue });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Parabéns! Você chegou à próxima tela.</Text>
      
      {/* Texto descritivo */}
      <Text>Informe algo:</Text>

      {/* Input de texto */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          width: '80%',
        }}
        onChangeText={handleInputChange}
        value={inputValue}
      />

      {/* Botão de submit */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default NextScreen;
