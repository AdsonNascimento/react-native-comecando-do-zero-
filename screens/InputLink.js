import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InputLink = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    navigation.navigate('WebView', { inputValue });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-forpeople.png')} style={styles.image} />

      <View style={styles.containerInput}>
        <Text>Código For People</Text>

        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputValue}
        />
      </View>
      
      <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 70,
    paddingTop: 150,
    backgroundColor: '#F5F5F5'
  },

  image: {
    width: 255,
    height: 100,
  },

  containerInput: {
    gap: 20,
    width: '80%'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 999
  },

  submit: {
    backgroundColor: '#FFCD00',
    padding: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },

  submitText: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default InputLink;