import { Stack } from 'expo-router';
import { useAuth } from '../../context/DataProvider';

export default function MainLayout() {
    const {authcheck} = useAuth();
    // const [auth, setAuth] = useState(true)
    return (
        <Stack screenOptions={{headerShown:false}}>
            {authcheck ?
                <Stack.Screen name='(drawer)' />
                :
                 <Stack.Screen name='(auth)' />
            }

        </Stack>
    )
}