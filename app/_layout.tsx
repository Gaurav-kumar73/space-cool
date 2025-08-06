import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DataProvider from '../context/DataProvider';
export default function RootLayout() {
  return (
    <DataProvider>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(main)" />
        </Stack>
      </GestureHandlerRootView>
    </DataProvider>
  );
}
