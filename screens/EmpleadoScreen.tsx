import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EmpleadoScreen() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(API_EMPLEADO)
      .then((response) => response.json())
      .then((data) => setDatos(data.bicicletas))
      .catch((error) => console.log(error));
  }, []);

  type empleado = {
    name: string;
    images: string;
    species: string;
    modelo: string;
    tipo: string;
    precio: number;
    marca: string;
    color: string;
    material_cuadro: string;
    velocidades: number;
  };

  const API_EMPLEADO = 'https://jritsqmet.github.io/web-api/bicicletas.json';

  // Función para calcular el precio total de las bicicletas
  const calcularPrecioTotal = () => {
    const precioTotal = datos.reduce((total, bicicleta) => total + bicicleta.precio, 0);
    return precioTotal;
  };

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/695/331/660/digital-art-artwork-women-cityscape-wallpaper-preview.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>EmpleadoScreen</Text>
        <FlatList
          data={datos}
          renderItem={({ item }: { item: empleado }) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={{ uri: item.images }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Modelo: {item.modelo}</Text>
                <Text style={styles.text}>Tipo: {item.tipo}</Text>
                <Text style={styles.text}>Precio: {item.precio}</Text>
                <Text style={styles.text}>Marca: {item.marca}</Text>
                <Text style={styles.text}>Color: {item.color}</Text>
                <Text style={styles.text}>Material Cuadro: {item.material_cuadro}</Text>
                <Text style={styles.text}>Velocidades: {item.velocidades}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />

        {/* Mostrar el precio total */}
        <Text style={styles.totalPrice}>Precio Total: ${calcularPrecioTotal()}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'white',
  },
});
