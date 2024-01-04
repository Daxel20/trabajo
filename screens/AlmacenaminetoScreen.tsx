import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';

// Componente funcional para mostrar la información de un registro
const Informacion = ({ monto, categoria, descripcion }) => {
  return (
    <View style={styles.infoContainer}>
      <Text>Monto: {monto}</Text>
      <Text>Categoría: {categoria}</Text>
      <Text>Descripción: {descripcion}</Text>
    </View>
  );
};

// Componente Screen2
const Screen2 = () => {
  // Datos de ejemplo
  const registros = [
    { id: '1', monto: '100', categoria: 'Comida', descripcion: 'Almuerzo' },
    { id: '2', monto: '50', categoria: 'Transporte', descripcion: 'Gasolina' },
    { id: '3', monto: '200', categoria: 'Entretenimiento', descripcion: 'Cine' },
  ];

  // Estado para almacenar el id seleccionado y la información detallada
  const [selectedId, setSelectedId] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  // Función para manejar la selección de un elemento en la FlatList
  const handleSelect = (id, monto, categoria, descripcion) => {
    setSelectedId(id);
    setSelectedInfo({ monto, categoria, descripcion });
    Alert.alert('Detalles del Registro', `Categoría: ${categoria}\nDescripción: ${descripcion}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/556/382/458/fantasy-art-artwork-fan-art-science-fiction-wallpaper-preview.jpg' }} // Reemplaza con la URL de tu imagen de fondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Sección 1: Obtener datos de un registro por id */}
        <Text style={styles.sectionTitle}>Sección 1: Obtener datos por ID</Text>
        {selectedId && (
          <Informacion monto={selectedInfo.monto} categoria={selectedInfo.categoria} descripcion={selectedInfo.descripcion} />
        )}

        {/* Sección 2: Obtener lista de montos */}
        <Text style={styles.sectionTitle}>Sección 2: Lista de Montos</Text>
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item.id, item.monto, item.categoria, item.descripcion)}>
              <Text style={styles.montoItem}>Monto: ${item.monto}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10, // Añadido para separación
    color: 'white', // Color del título
  },
  montoItem: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  infoContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10, // Añadido para separación
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Screen2;
