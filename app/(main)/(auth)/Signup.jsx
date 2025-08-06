import { useNavigation } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import CustomButton from '../../../components/CustomButton'
import SocialCircle from '../../../components/SocialCircle'
import { AppleIcon, FaceBookIcon, GoogleIcon } from '../../../constant/Icons'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [errorColor, setErrorColor] = useState(false);

    const navigation = useNavigation();



    const checkPassword = () => {
        if (password.trim() !== confirmPassword.trim()) {
            setPasswordError('Passwords do not match');
            setErrorColor(false);
        }
        else {
            setPasswordError("Password Match")
            setErrorColor(true);
        }

    }
    const validateForm = () => {
        if (!email || !password || !confirmPassword) {
            setEmailError('All fields are required');
            return false;
        }
        // if (password !== confirmPassword) {
        //     setPasswordError('Passwords do not match');
        //     return false;
        // }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            setErrorColor(false)
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const clearFileds = () => {
        setConfirmPassword('')
        setEmail('');
        setPassword('')
        setEmailError('')
        setPasswordError('')
        setErrorColor(false)
    }

    const singupHandler = () => {
        if (validateForm()) {
            Alert.alert("Registed");
            clearFileds();
        }
        // else{
        //     Alert.alert("Fill all fileds ")
        //     clearFileds();
        // }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image source={require("../../../assets/images/spaceLogo.png")}
                style={styles.Logo}
            />
            <Text style={[styles.Title]}>Sign Up</Text>
            <Text style={styles.Error}>{emailError}</Text>

            <TextInput
                value={email}
                onChangeText={(txt) => { setEmail(txt), setEmailError('') }}
                placeholder='Email'
                style={[styles.TextInput]} />
            <TextInput
                value={password}
                onChangeText={(txt) => setPassword(txt)}
                placeholder='Password'
                style={[styles.TextInput, { marginTop: vs(15) }]} />
            <Text style={[styles.Error, { color: errorColor ? "rgba(67, 172, 26, 1)" : "red" }]}>{passwordError}</Text>
            <TextInput
                value={confirmPassword}
                onChangeText={(txt) => { setConfirmPassword(txt), checkPassword() }}

                placeholder='Confirm Password'
                style={[styles.TextInput, { marginBottom: vs(20) }]} />

            <CustomButton title={"Sign Up"} onPress={singupHandler} />
            <Text style={styles.LoginLink}>or Sign up with</Text>
            <View style={styles.SocialIconContainer}>
                <SocialCircle bg={"#3f5992"} icon={<FaceBookIcon onPress={() => Alert.alert("Signup with FaceBook")} />} />
                <SocialCircle bg={"#d84c3d"} icon={<GoogleIcon />} onPress={() => Alert.alert("Signup with Gmail")} />
                <SocialCircle bg={"#020202"} icon={<AppleIcon onPress={() => Alert.alert("Signup with Apple Id")} />} />
            </View>
            <Text style={styles.LoginLink}>
                Already have an account?
                <Text onPress={() => navigation.navigate("Login")} style={styles.LinkText}>
                    Log in
                </Text>
            </Text>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        paddingHorizontal: s(30)


    },
    Logo: {
        width: s(150),
        height: vs(150),
        resizeMode: "stretch",
        backgroundColor: "#fff",
        marginTop: vs(40)
    },
    TextInput: {
        color: "#000",
        paddingStart: s(15),
        fontSize: s(12),
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 6,
        marginBottom: vs(0)

    },
    SocialIconContainer: {
        flexDirection: "row",
        gap: s(20),
        marginTop: vs(20)
    },
    LoginLink: {
        alignSelf: "center",
        color: "gray",
        fontSize: s(14),
        marginTop: vs(35),
    },
    LinkText: {
        fontSize: s(12),
        color: "#686bf0",
        fontWeight: "500",
    },
    Title: {
        fontSize: s(30),
        fontWeight: "800",
        color: "#0e2c4eff",
        alignSelf: "center",
        marginTop: vs(20),
        marginBottom: vs(10)
    },
    Error: {
        fontSize: s(9),
        alignSelf: "flex-start",
        color: "red",
        marginStart: s(5),
        marginBottom: 2
    }

})