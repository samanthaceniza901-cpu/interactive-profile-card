import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  // Use useState to store the typed name
  const [name, setName] = useState('dasdsadad');

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Image Asset */}
      <Image 
        source={require('./assets/IMG_20240805_225215_312.jpg')} 
        style={styles.profileImage} 
      />

      {/* TextInput for user interaction */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      {/* Displaying the value using {} in the required format */}
      <Text style={styles.greetingText}>Hello, {name}!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 14,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default App;