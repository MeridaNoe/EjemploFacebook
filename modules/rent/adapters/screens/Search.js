import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Image } from "@rneui/base";
import { Button } from "react-native";
import { Avatar } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Rent() {
  return (
    <View>
      <Icon
        style={styles.icon}
        type="material-community"
        name="magnify"
        size={22}
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: -25 }}>
        AMIGOS
      </Text>

      <KeyboardAwareScrollView  extraScrollHeight={50} >
        <View style={styles.content}>
                
      <View style={styles.circle}>
        <Text style={{ fontSize: 15, marginLeft: 20, color: "#fff" }}>
          Solicitudes
        </Text>
      </View>
      <View style={styles.circle2}>
        <Text style={{ fontSize: 15, marginLeft: 20, color: "#fff" }}>
          Tus Amigos
        </Text>
      </View>
      <Text style={{ marginVertical: 20 }}>
        {" "}
        ________________________________________________________
      </Text>
      <Text style={{fontSize:20, fontWeight:"bold"}}>Personas que Quizas conozcas</Text>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Alan Matthew Estaban Dominguez Castaneda
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Noe Merida Puente
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Luis Kevin Lopez Ocampo
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Erick Mireles Merchant
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Emannuel Nava Alba
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Lisset Georgina Fuente Figueroa
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Maycon Manuel Carmona Medina
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
      <View style={styles.view}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
          }}
        />
        <Text style={{ marginLeft: 90, marginTop: -70 }}>
          Jose Eduardo Arroyo Palafox
        </Text>
        <View
          style={{
            marginLeft:100,
            marginTop: 5,
            alignItems: "flex-start",
          }}>
          <Button title="Agregar Amigo" style={styles.button} />
        </View>
        <View
          style={{
            marginLeft:245,
            marginTop: -35,
            alignItems: "flex-start",
          }}>
          <Button title="Eliminar" style={styles.button} color="#666666"/>
        </View>
      </View>
        </View>
      </KeyboardAwareScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 350,
    marginTop: 8,
    size: 20,
  },
  circle: {
    backgroundColor: "#808080",
    flexDirection: "row",
    borderRadius: 20,
    width: 115,
    marginLeft: 20,
  },
  circle2: {
    backgroundColor: "#808080",
    flexDirection: "row",
    borderRadius: 20,
    width: 125,
    marginLeft: 140,
    marginTop: -21,
  },
  avatar: {
    marginTop: 20,
  },
  button: {
    flex: 0.5,
  },
  view:{
    marginTop:30
  },
  content: {
    paddingBottom: 50, // espacio adicional en la parte inferior
  },
});
