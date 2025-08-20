import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import CustomButton from '../../../components/CustomButton'
import SocialCircle from '../../../components/SocialCircle'
import { AppleIcon, FaceBookIcon, GoogleIcon } from '../../../constant/Icons'
import { useAuth } from '../../../context/DataProvider'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordVisibal, setPasswordVisibal] = useState(true)
    const [Loader, setLoader] = useState(false);
    const { Login } = useAuth();

    const navigation = useNavigation();


    const validateForm = () => {
        if (!email || !password) {
            setEmailError('All fields are required');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const clearFileds = () => {
        setEmail('');
        setPassword('')
        setEmailError('')
    }

    const LoginHandler = async () => {
        if (!validateForm()) return;
        setLoader(true);
        let result = await Login(email, password);
        setLoader(false);
        
        if (result === true) {
            clearFileds();
            navigation.navigate("(drawer)");
        }
        else{
            setEmailError(result);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image source={require("../../../assets/images/spaceLogo.png")}
                style={styles.Logo}
            />
            <Text style={[styles.Title]}>Log in</Text>
            <Text style={styles.Error}>{emailError}</Text>

            <TextInput
                editable={!Loader}
                value={email}
                onChangeText={(txt) => { setEmail(txt), setEmailError('') }}
                placeholder='Email'
                style={[styles.TextInput,Loader ? {backgroundColor:'#b9b9b9cb'} : {}]} />
            <View style={{ width: "100%", marginTop: vs(15) }}>
                <TextInput
                editable={!Loader}
                    secureTextEntry={passwordVisibal}
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                    placeholder='Password'
                    style={[styles.TextInput,Loader? {backgroundColor:'#b9b9b9cb'} : {}]} />
                <Pressable style={styles.EyeContainer} onPress={() => setPasswordVisibal(!passwordVisibal)}>
                    {passwordVisibal ? <Feather name="eye-off" size={20} color='gray' />
                        :
                        <Feather name="eye" size={20} color='gray' />

                    }
                </Pressable>

            </View>

            {/*  Forget password */}
            <Text style={styles.forgetPassword} onPress={() => {
                navigation.navigate("ResetPassword")
            }}>Forget Password</Text>
            <CustomButton title={"Login"} onPress={LoginHandler} Loader={Loader} />
            <Text style={[styles.LoginLink, { marginTop: vs(75) }]}>or Login with</Text>
            <View style={styles.SocialIconContainer}>
                <SocialCircle bg={"#3f5992"} icon={<FaceBookIcon />} onPress={() => Alert.alert("Login with FaceBook")} />
                <SocialCircle bg={"#d84c3d"} icon={<GoogleIcon />} onPress={() => Alert.alert("Login with Gmail")} />
                <SocialCircle bg={"#020202"} icon={<AppleIcon />} onPress={() => Alert.alert("Login with Apple Id")} />
            </View>
            <Text style={styles.LoginLink}>
                Don't have an account?
                <Text onPress={() => navigation.goBack()} style={styles.LinkText}>
                    Sign Up
                </Text>

            </Text>



        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingHorizontal: s(30)


    },
    Logo: {
        width: s(150),
        height: vs(150),
        resizeMode: "stretch",
        backgroundColor: "red",
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
    },
    EyeContainer: {
        position: "absolute",
        right: s(12),
        height: "100%",
        justifyContent: "center",
        // backgroundColor:"red"
    },
    forgetPassword: {
        color: "#090344",
        fontSize: 12,
        alignSelf: "flex-end",
        marginTop: vs(5),
        marginBottom: vs(10),
        marginEnd: s(10)
    }

})