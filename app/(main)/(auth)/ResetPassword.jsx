import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import { useAuth } from '../../../context/DataProvider';
const ResetPassword = () => {
    const [successText, setSuccess] = useState('');
    const [Email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [Loader, setLoader] = useState(false);
    const { ResetPassword } = useAuth();

    const navigation = useNavigation();


    const validateEmail = () => {
        if (!Email) {
            setError('Please enter your email address');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            setError('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const handleSendResetEmail = async () => {
        if (!validateEmail()) return;
        setLoader(true)
        let result = await ResetPassword(Email)
        setLoader(false)
        if (result === true) {
            setSuccess('Password reset email sent successfully!');
            Alert.alert(
                'Password Reset Email Sent',
                'Please check your inbox for instructions to reset your password. If you don\'t see the email, check your spam folder.',
                [{
                    text: 'OK',
                    onPress: () => navigation.goBack()
                }]
            );
            setEmail('');
        }
        else {
            setError(result)
        }

    };

   
    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={s(24)} color="black" />
                </TouchableOpacity>
                <Image source={require("../../../assets/images/spaceLogo.png")}
                    style={styles.Logo}
                />
                <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.subtitle}>
                    Enter your email and we'll send you a link to reset your password
                </Text>
                <Text style={styles.success}>{successText}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.InputField, Loader && { backgroundColor: '#b9b9b9cb' }]}
                        value={Email}
                        placeholder="Email Address"
                        placeholderTextColor="#888"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autoCorrect={false}
                        onChangeText={(txt) => [setEmail(txt), setError('')]}
                    />

                </View>
                <Text style={styles.error}>{error}</Text>
                <CustomButton title={"Login"} onPress={handleSendResetEmail} Loader={Loader} />
                <TouchableOpacity
                    style={styles.loginLink}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.loginText}>
                        Remember your password? <Text style={styles.loginLinkText}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: vs(20),
        left: s(15),
        zIndex: 1,
    },
    title: {
        fontSize: s(30),
        fontWeight: "800",
        color: "#0e2c4eff",
        alignSelf: "center",
        marginTop: vs(20),
        marginBottom: vs(10)
    },
    subtitle: {
        fontSize: s(16),
        color: '#666',
        textAlign: 'center',
        marginBottom: vs(0),
    },
    success: {
        color: 'green',
        marginBottom: vs(15),
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
    },
    InputField: {
        color: "#000",
        paddingStart: s(15),
        fontSize: s(12),
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: s(6),


    },
    error: {
        color: 'red',
        textAlign: 'left',
        fontSize: s(10),
        marginStart: s(5),
    },
    button: {
        height: vs(40),
        backgroundColor: "#090344",
        borderRadius: s(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vs(8),
    },
    buttonText: {
        color: '#fff',
        fontSize: s(18),
        fontWeight: '600',
    },

    loginLink: {
        marginTop: vs(25),
        alignItems: 'center',
    },
    loginText: {
        color: '#666',
        fontSize: 16,
    },
    loginLinkText: {
        fontSize: s(12),
        color: "#686bf0",
        fontWeight: "500",
    },
    Logo: {
        width: s(150),
        height: vs(150),
        resizeMode: "stretch",
        backgroundColor: "red",
        marginTop: vs(40),
        alignSelf: "center"
    },
})