import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [food, setFood] = useState('Hambúrguer');
  const [drink, setDrink] = useState('Coca-Cola');

  const placeOrder = () => {
    Alert.alert('Pedido Confirmado!', `Você pediu:\n1x ${food}\n1x ${drink}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 DM Lanches 🍕</Text>

      <Text style={styles.label}>Escolha sua comida:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={food}
          onValueChange={(itemValue) => setFood(itemValue)}
        >
          <Picker.Item label="Hambúrguer (R$ 25)" value="Hambúrguer" />
          <Picker.Item label="Pizza (R$ 40)" value="Pizza" />
          <Picker.Item label="Batata Frita (R$ 15)" value="Batata Frita" />
          <Picker.Item label="Cachorro Quente (R$ 12)" value="Cachorro Quente" />
        </Picker>
      </View>

      <Text style={styles.label}>Escolha sua bebida:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={drink}
          onValueChange={(itemValue) => setDrink(itemValue)}
        >
          <Picker.Item label="Coca-Cola (R$ 8)" value="Coca-Cola" />
          <Picker.Item label="Suco de Laranja (R$ 10)" value="Suco de Laranja" />
          <Picker.Item label="Água (R$ 5)" value="Água" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Fazer Pedido" onPress={placeOrder} color="#ff6347" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: '5%',
    color: '#555',
  },
  pickerContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    overflow: 'hidden',
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
