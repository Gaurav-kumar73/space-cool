import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from "expo-router";
import { TabBar } from '../../../../components/TabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: true, headerLeft: () => <DrawerToggleButton /> }}
    initialRouteName='Home'
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="home-outline" size={size} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="person-outline" size={size} color={color} />
          // ),
        }}
      />
       <Tabs.Screen
        name="carrers"
        options={{
          title: "Carrer",
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="person-outline" size={size} color={color}
          //    />
          // ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="person-outline" size={size} color={color} 
          //   />
          // ),
        }}
      />

    </Tabs>
  );
}

