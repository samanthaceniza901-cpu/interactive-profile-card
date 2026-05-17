import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native';

const App = () => {
  // State variables
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Message logic based on counter
  const message = count > 0 
    ? `${name || 'Someone'}, you tapped ${count} times!` 
    : "Tap the + button to start";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Image Asset */}
        <Image 
          source={require('./assets/IMG_20240805_225215_312.jpg')} 
          style={styles.profileImage} 
        />

        {/* TextInput for user name input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        {/* Conditional Greeting Message */}
        <Text style={styles.text}>
          {name === '' ? 'Please enter your name' : `Hello, ${name}!`}
        </Text>

        {/* Dynamic Counter Message */}
        <Text style={styles.text}>{message}</Text>

        {/* Counter Buttons Container (+, -, RESET) */}
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => setCount(count + 1)} color="#2196F3" />
          <View style={{ marginVertical: 5 }} />
          <Button title="-" onPress={() => setCount(count - 1)} color="#2196F3" />
          <View style={{ marginVertical: 5 }} />
          <Button title="RESET" onPress={() => setCount(0)} color="#2196F3" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
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
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 15,
    width: '60%',
  },
});

export default App;