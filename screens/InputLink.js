import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const InputLink = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    navigation.navigate('WebView', { inputValue });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Link For People</Text>

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

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default InputLink;