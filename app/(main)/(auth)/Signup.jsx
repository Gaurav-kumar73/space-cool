import { useNavigation } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import CustomButton from '../../../components/CustomButton'
import SocialCircle from '../../../components/SocialCircle'
import { AppleIcon, FaceBookIcon, GoogleIcon } from '../../../constant/Icons'
import { useAuth } from '../../../context/DataProvider'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [strength, setStrength] = useState('');
    const [errorColor, setErrorColor] = useState('');
    const [Loader, setLoader] = useState(false);

    const navigation = useNavigation();
    const { signUpaccount } = useAuth();


    const handleConfirmPasswordChange = (text) => {
        if (!text) {
            setConfirmPassword('');
            setPasswordError('');
            setErrorColor(false);
            return;
        }
        setConfirmPassword(text);
        if (password === text) {
            setPasswordError('Passwords match');
            setErrorColor("rgba(67, 172, 26, 1)")
        }
        else {
            setPasswordError('Passwords do not match');
            setErrorColor("red");
        }



    };

    const checkPasswordStrength = (input) => {
        setPassword(input);

        if (!input) {
            setPassword('')
            setStrength('')
            return;
        }

        let score = 0;
        if (input.length >= 12) score += 3;
        else if (input.length >= 8) score += 2;
        else if (input.length >= 5) score += 1;

        if (/[A-Z]/.test(input)) score += 1;

        if (/[a-z]/.test(input)) score += 1;

        if (/\d/.test(input)) score += 1;

        // Contains special characters
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(input)) score += 2;

        if (score >= 7) {
            setStrength('strong');
        } else if (score >= 4) {
            setStrength('normal');
        } else {
            setStrength('weak');
        }
    }

    const getStrengthColor = () => {
        switch (strength) {
            case 'weak':
                return '#ff4444';
            case 'normal':
                return '#ffaa00';
            case 'strong':
                return '#00aa00';
            default:
                return '#eee';
        }
    };


    const validateForm = () => {
        if (!email || !password || !confirmPassword) {
            setEmailError('All fields are required');
            return false;
        }
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

    const singupHandler = async () => {
        if (!validateForm()) return;
        setLoader(true);
        const result = await signUpaccount(email, password)
        // console.log(result)
        setLoader(false);
        if (result === true) {
            Alert.alert(
                'Account Created',
                'A verification email has been sent to your email address. Please verify your email before logging in.',
                [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
            );
            clearFileds();
        }
        else {
            Alert.alert("Error", result);
            setEmailError(result);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <KeyboardAvoidingView style={{flex:1,width:"100%"}} behavior="padding"> */}

                <Image source={require("../../../assets/images/spaceLogo.png")}
                    style={styles.Logo}
                />
                <Text style={[styles.Title]}>Sign Up</Text>
                <Text style={styles.Error}>{emailError}</Text>

                <TextInput

                    editable={!Loader}
                    value={email}
                    onChangeText={(txt) => { setEmail(txt), setEmailError('') }}
                    placeholder='Email'
                    style={[styles.TextInput, Loader && { backgroundColor: '#b9b9b9cb' }]} />
                <TextInput
                    secureTextEntry

                    editable={!Loader}
                    value={password}
                    onChangeText={(txt) => checkPasswordStrength(txt)}
                    placeholder='Password'
                    style={[styles.TextInput, Loader && { backgroundColor: '#b9b9b9cb' }, { marginTop: vs(15) }]} />
                <Text style={[styles.Error, { color: getStrengthColor(), marginBottom: 5 }]}>{strength}</Text>
                <TextInput
                    secureTextEntry
                    editable={!Loader}
                    value={confirmPassword}
                    onChangeText={(txt) => handleConfirmPasswordChange(txt)}

                    placeholder='Confirm Password'
                    style={[styles.TextInput, Loader && { backgroundColor: '#b9b9b9cb' }]} />
                <Text style={[styles.Error, { color: errorColor, marginBottom: 5 }]}>{passwordError}</Text>


                <CustomButton title={"Sign Up"} onPress={singupHandler} Loader={Loader} />
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
            {/* </KeyboardAvoidingView> */}

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