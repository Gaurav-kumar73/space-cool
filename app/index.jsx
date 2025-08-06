import { Video } from 'expo-av';
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // This is a splash screen
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("(main)");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Video
        source={require('../assets/video/space.mp4')}
        style={styles.video}
        resizeMode="cover" // Choose the appropriate resize mode
        shouldPlay={true}
        isLooping={true}
      />
      <Text style={styles.title}>SpaceSkool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    height: "100%",
    width: "100%", // Ensure the video covers the entire screen
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    fontSize: 35,
    color: "rgba(255,220,33,1)",
    fontWeight: "700",
    alignSelf: "center",
    // position: "absolute", // Position the title over the video
    // bottom: 50, // Adjust as needed
  },
});
