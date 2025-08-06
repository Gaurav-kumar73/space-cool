import { Stack } from 'expo-router';
import { useAuth } from '../../context/DataProvider';

export default function MainLayout() {
    const {auth} = useAuth();
    // const [auth, setAuth] = useState(true)
    return (
        <Stack screenOptions={{headerShown:false}}>
            {auth ?
                <Stack.Screen name='(drawer)' />
                :
                 <Stack.Screen name='(auth)' />
            }

        </Stack>
    )
}