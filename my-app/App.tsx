import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MENU = {
  foods: [
    { id: 'hamburguer', name: 'Hambúrguer', price: 25, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/240px-Hamburger_%28black_bg%29.jpg' },
    { id: 'pizza', name: 'Pizza', price: 40, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/240px-Eq_it-na_pizza-margherita_sep2005_sml.jpg' },
    { id: 'hotdog', name: 'Hot Dog', price: 15, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/240px-Hot_dog_with_mustard.png' },
  ],
  drinks: [
    { id: 'refrigerante', name: 'Refrigerante', price: 8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tumbler_of_cola_with_ice.jpg/240px-Tumbler_of_cola_with_ice.jpg' },
    { id: 'suco', name: 'Suco', price: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Orangejuice.jpg/240px-Orangejuice.jpg' },
    { id: 'agua', name: 'Água', price: 5, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Water_glass.jpg/240px-Water_glass.jpg' },
  ]
};

export default function App() {
  const [foodId, setFoodId] = useState(MENU.foods[0].id);
  const [drinkId, setDrinkId] = useState(MENU.drinks[0].id);

  // Busca os objetos completos baseados no ID selecionado
  const selectedFood = MENU.foods.find(f => f.id === foodId)!;
  const selectedDrink = MENU.drinks.find(d => d.id === drinkId)!;
  
  // Calcula o total
  const totalPrice = selectedFood.price + selectedDrink.price;

  const placeOrder = () => {
    Alert.alert(
      'Pedido Confirmado!', 
      `Resumo do pedido:\n🍔 1x ${selectedFood.name}\n🥤 1x ${selectedDrink.name}\n\nTotal a pagar: R$ ${totalPrice.toFixed(2)}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍔 DM Lanches 🍟</Text>

      <View style={styles.row}>
        {/* Coluna da Comida */}
        <View style={styles.itemBox}>
          <Image source={{ uri: selectedFood.image }} style={styles.image} />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={foodId}
              onValueChange={(itemValue) => setFoodId(itemValue)}
            >
              {MENU.foods.map(food => (
                <Picker.Item key={food.id} label={food.name} value={food.id} />
              ))}
            </Picker>
          </View>
          <Text style={styles.itemPrice}>R$ {selectedFood.price.toFixed(2)}</Text>
        </View>

        {/* Coluna da Bebida */}
        <View style={styles.itemBox}>
          <Image source={{ uri: selectedDrink.image }} style={styles.image} />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={drinkId}
              onValueChange={(itemValue) => setDrinkId(itemValue)}
            >
              {MENU.drinks.map(drink => (
                <Picker.Item key={drink.id} label={drink.name} value={drink.id} />
              ))}
            </Picker>
          </View>
          <Text style={styles.itemPrice}>R$ {selectedDrink.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Pedido: {selectedFood.name} + {selectedDrink.name}</Text>
        <Text style={styles.totalText}>Total: R$ {totalPrice.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Confirmar Pedido" onPress={placeOrder} color="#D90429" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF3E0', // Cor de fundo quente (estilo fast-food)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
    color: '#D90429', // Vermelho vibrante
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  itemBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#F1FAEE',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#457B9D',
  },
  summaryContainer: {
    backgroundColor: '#F4A261', // Laranja amarelado para destaque
    width: '100%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  totalText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 40,
  },
});
