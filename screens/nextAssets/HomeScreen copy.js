import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedArrow, setSelectedArrow] = useState('');

  const handleArrowSelection = (direction) => {
    setSelectedArrow(direction);
  };

  const handleConfirm = () => {
    // Navegar para a próxima tela (ConfirmScreen) passando a direção selecionada
    navigation.navigate('Confirm', { selectedArrow });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selecione a seta que está apontada para cima.</Text>
      
      {/* Botões de setas */}
      <Button title="⬅️" onPress={() => handleArrowSelection('left')} />
      <Button title="⬆️" onPress={() => handleArrowSelection('up')} />
      <Button title="➡️" onPress={() => handleArrowSelection('right')} />
      <Button title="⬇️" onPress={() => handleArrowSelection('down')} />

      {/* Botão de confirme */}
      <Button title="Confirme" onPress={handleConfirm} />
    </View>
  );
};

export default HomeScreen;
