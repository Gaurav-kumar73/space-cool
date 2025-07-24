import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:50
      }}
    >
      <Text style={{fontSize:24, fontWeight:"bold"}}>This is a Splash Screen.</Text>

      <Link href={"/(tabs)"} style={{backgroundColor:"green", padding:15, color:"white"}}>got to application...</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
