import React, { useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, Modal, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Screen3 = () => {
  const [registros, setRegistros] = useState([
    { id: '1', monto: '100', categoria: 'Comida', descripcion: 'Almuerzo' },
    { id: '2', monto: '50', categoria: 'Transporte', descripcion: 'Viaje en autobús' },
    // ... otros registros
  ]);

  const [mensaje, setMensaje] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [nuevoMonto, setNuevoMonto] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const editarRegistro = () => {
    if (registroSeleccionado) {
      // Actualizar el estado local simulando la edición
      setRegistros((prevRegistros) =>
        prevRegistros.map((registro) =>
          registro.id === registroSeleccionado.id
            ? {
                ...registro,
                monto: nuevoMonto,
                categoria: nuevaCategoria,
                descripcion: nuevaDescripcion,
              }
            : registro
        )
      );

      // Mostrar mensaje de edición
      setMensaje('Registro editado correctamente.');
      setModalVisible(false);
    }
  };

  const confirmarEliminacion = (id) => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => eliminarRegistro(id),
        },
      ],
      { cancelable: false }
    );
  };

  const eliminarRegistro = (id) => {
    // Filtrar el estado local para simular la eliminación
    setRegistros((prevRegistros) => prevRegistros.filter((registro) => registro.id !== id));

    // Mostrar mensaje de eliminación
    setMensaje('Registro eliminado correctamente.');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>ID: {item.id}</Text>
      <Text>Monto: {item.monto}</Text>
      <Text>Categoría: {item.categoria}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Editar"
          onPress={() => {
            setRegistroSeleccionado(item);
            setNuevoMonto(item.monto);
            setNuevaCategoria(item.categoria);
            setNuevaDescripcion(item.descripcion);
            setModalVisible(true);
          }}
        />
        <Button title="Eliminar" onPress={() => confirmarEliminacion(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-anime-girls-original-characters-short-hair-wallpaper-preview.jpg' }} // Reemplaza con la URL de tu imagen de fondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Editar y Eliminar Registros</Text>
        <FlatList data={registros} renderItem={renderItem} keyExtractor={(item) => item.id} />

        {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}

        {/* Modal de Edición */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Editar Registro</Text>
              <TextInput
                style={styles.input}
                placeholder="Nuevo Monto"
                value={nuevoMonto}
                onChangeText={(text) => setNuevoMonto(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nueva Categoría"
                value={nuevaCategoria}
                onChangeText={(text) => setNuevaCategoria(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nueva Descripción"
                value={nuevaDescripcion}
                onChangeText={(text) => setNuevaDescripcion(text)}
              />
              <Button title="Guardar Cambios" onPress={editarRegistro} />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  mensaje: {
    color: 'green',
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Screen3;
