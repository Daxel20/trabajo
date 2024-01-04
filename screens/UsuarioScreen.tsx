import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const Screen1 = () => {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const mostrarAlerta = (mensaje) => {
    Alert.alert('Aviso', mensaje);
  };

  const agregarGasto = () => {
    if (id === '' || monto === '' || categoria === '' || descripcion === '') {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');

    mostrarAlerta('Gasto agregado correctamente.');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/705/826/351/digital-digital-art-artwork-illustration-ricodz-hd-wallpaper-preview.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Gasto</Text>

        <TextInput
          style={styles.input}
          placeholder="ID"
          value={id}
          onChangeText={(text) => setId(text)}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Monto"
          value={monto}
          onChangeText={(text) => setMonto(text)}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Categoría"
          value={categoria}
          onChangeText={(text) => setCategoria(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={descripcion}
          onChangeText={(text) => setDescripcion(text)}
        />

        {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}

        <Button title="REGISTRAR" onPress={agregarGasto} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start', // Alinea el contenido en la parte superior
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Color del título
  },
  input: {
    height: 40,
    borderColor: '#ccc', // Color del borde
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: 'white', // Fondo blanco para mayor legibilidad
  },
  mensaje: {
    color: 'green',
    marginBottom: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%', // Ajusta el ancho de la imagen al 100% del contenedor
  },
});

export default Screen1;
