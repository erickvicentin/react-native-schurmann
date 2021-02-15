import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Button, Image, Modal } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        WELCOME
      </Text>
      <Image
        style={{ marginVertical: 5, height: 100, width: 100 }}
        source={{
          uri:
            "https://www.eafit.edu.co/idiomas/maravillas-espanol/frijolesconchicharron/Medias/Thumbnails/home-page.png.png",
        }}
      />
      <Button title="Information" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const Logo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 30, width: 60 }}
        source={{
          uri:
            "https://secure.meetupstatic.com/photos/event/6/e/2/5/600_488248197.jpeg",
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 25 }}> Trainings</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    return <Ionicons name='ios-home' size={25} color={tintColor}/>
  },
  headerTitle: <Logo />,
  headerRight: (
    <View style={{ paddingRight: 5 }}>
      <Button onPress={() => alert("Alerta")} color="black" title="Boton" />
    </View>
  ),
};

const InformationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detalle Screen</Text>
      <Button title="Contact" onPress={() => navigation.push("Contacto")} />
      <Button title='Modal' onPress={() => navigation.navigate('MiModal')} />
    </View>
  );
};

InformationScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    return (
      <Ionicons name="ios-information-circle" size={25} color={tintColor} />
    );
  },
};

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Email: erickvicentin14@hotmail.com</Text>
      <Text> Telefono: 3625227229 </Text>
      <Text> Resistencia - CHACO </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

ContactScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    return (
      <Ionicons name="ios-mail" size={25} color={tintColor} />
    );
  },
};

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Information: { screen: InformationScreen },
    Contact: { screen: ContactScreen },
  },
  {
    initialRouteName: "Home",
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    MiModal: ({navigation}) => (
      <>
        <Text>Hla</Text>
        <Button title='cerrar' onPress={() => navigation.goBack()} />
      </>
    ),
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
