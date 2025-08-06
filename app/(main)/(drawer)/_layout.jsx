import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

export default function Layout() {
  const CustomDrawerContent = (props) => {
    const pathname = usePathname();

    // useEffect(() => {
    //   console.log(pathname)
    // }, [pathname])
    return (
      <DrawerContentScrollView {...props} >
        <DrawerItem
          style={{ backgroundColor: pathname == '/Home' ? "#333" : '#fff' }}
          icon={({ color, size }) => (<FontAwesome
            name="home"
            size={size}
            color={pathname == '/Home' ? "#fff" : '#000'} />)}
          onPress={() => {
            router.push('(drawer)/(tabs)/Home')

          }}
          label={"Home"}
          labelStyle={[styles.navItem, { color: pathname == '/Home' ? "#fff" : '#000' }]} />

       
        {/* <DrawerItem
          style={{ backgroundColor: pathname == '/about' ? "#333" : '#fff' }}
          icon={({ color, size }) =>
          (<Ionicons
            name="information-circle"
            size={30}
            color={pathname == '/about' ? "#fff" : '#000'} />)}
          label={"About"}
          labelStyle={[styles.navItem, { color: pathname == '/about' ? "#fff" : '#000' }]}
          onPress={() => {
            router.push('about')
          }}
        /> */}
        {/* <DrawerItem
          style={{ backgroundColor: pathname == '/programs' ? "#333" : '#fff' }}

          icon={({ color, size }) =>
          (<AntDesign
            name="appstore1"
            size={size}
            color={pathname == '/programs' ? "#fff" : '#000'} />)}
          onPress={() => {
            router.push('programs')
          }}
          label={"Programs"}
          labelStyle={[styles.navItem, { color: pathname == '/programs' ? "#fff" : '#000' }]}
        /> */}
        <DrawerItem
          style={{ backgroundColor: pathname == '/workshop' ? "#333" : '#fff' }}
          icon={({ color, size }) =>
          (<MaterialIcons
            name="group-work"
            size={size}
            color={pathname == '/workshop' ? "#fff" : '#000'} />)}
          label={"Worksohps"}
          labelStyle={[styles.navItem, { color: pathname == '/workshop' ? "#fff" : '#000' }]}
          onPress={() => {
            router.push('workshop')
          }}
        />
        {/* <DrawerItem
          style={{ backgroundColor: pathname == '/carrers' ? "#333" : '#fff' }}

          icon={({ color, size }) =>
          (<Octicons
            name="workflow"
            size={size}
            color={pathname == '/carrers' ? "#fff" : '#000'} />)}
          label={"Careers"}
          labelStyle={[styles.navItem, { color: pathname == '/carrers' ? "#fff" : '#000' }]}
          onPress={() => {
            router.push('carrers')
          }}
        /> */}
        <DrawerItem
          style={{ backgroundColor: pathname == '/contact' ? "#333" : '#fff' }}
          icon={({ color, size }) =>
          (<MaterialCommunityIcons
            name="contacts"
            size={size}
            color={pathname == '/contact' ? "#fff" : '#000'} />)}
          label={"Contact"}
          labelStyle={[styles.navItem, { color: pathname == '/contact' ? "#fff" : '#000' }]}
          onPress={() => {
            router.push('contact')
          }}
        />
        <DrawerItem
          style={{ backgroundColor: pathname == '/summerCamp' ? "#333" : '#fff' }}
          icon={({ color, size }) =>
          (<FontAwesome5
            name="bandcamp"
            size={size}
            color={pathname == '/summerCamp' ? "#fff" : '#000'} />)}
          label={"Summer Camp"}
          labelStyle={[styles.navItem, { color: pathname == '/summerCamp' ? "#fff" : '#000' }]}
          onPress={() => {
            router.push('summerCamp')
          }}
        />






      </DrawerContentScrollView>
    )
  }
  return (
    <Drawer
      // drawerWidth={100}
      drawerStyle={styles.drawer}
      screenOptions={{ headerShown: true }}
      initialRouteName='(tabs)'

      drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name='(tabs)' options={{ headerShown: false }} />
      {/* <Drawer.Screen name='programs' options={{ title: "Program" }} /> */}
      <Drawer.Screen name='workshop' options={{ title: "Workshops" }} />
      {/* <Drawer.Screen name='carrers' options={{ title: "Carrers" }} /> */}
      <Drawer.Screen name='contact' options={{ title: "Contact" }} />
      <Drawer.Screen name='summerCamp' options={{ title: "Summer Camp" }} />
    </Drawer>

  )
}

const styles = StyleSheet.create({
  navItem: {
    fontSize: 16
  },
  drawer: {
    backgroundColor: "red",
    width: 300,
    
  }
})