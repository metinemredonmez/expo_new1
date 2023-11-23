// app/screens/Auth/LoginScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import * as UserService from '../../api/services/userService';
import * as AuthService from '../../api/services/authService';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const loginResult = await AuthService.login(email, password);

            if (loginResult) {
                console.log('Başarıyla giriş yapıldı.');
                const userInfo = await UserService.getUserInfo(loginResult.accessToken);
                setUser(userInfo);
            } else {
                console.log('Giriş başarısız.');
            }
        } catch (error) {
            console.error('Giriş sırasında bir hata oluştu:', error.message);
        }
    };

    useEffect(() => {
        // Kullanıcı bilgilerini almak için AuthService.getUserInfo() fonksiyonunu kullanın
        AuthService.getUserInfo()
            .then((userInfo) => {
                setUser(userInfo);
            })
            .catch((error) => {
                console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error.message);
            });
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require('my-app/assets/login-gif1.gif')} style={styles.backgroundImage} />
                <Text style={styles.logo}>Lansman App</Text>

                {user ? ( // Kullanıcı bilgisi varsa, giriş yapılmış demektir
                    <View style={styles.loggedInContainer}>
                        <Text style={styles.loggedInText}>Hoş geldiniz, {user.username}!</Text>
                        {/* İstediğiniz ek bilgileri buraya ekleyebilirsiniz */}
                    </View>
                ) : (
                    // Kullanıcı bilgisi yoksa, giriş ekranını göster
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('Forgot')}>
                            <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <Text style={styles.text_a}>Do You Have a Account ?</Text>

                        // LoginScreen.js
                        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>


                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.smallButton} onPress={() => console.log('AWS ile giriş yapma işlemi')}>
                                <Text style={styles.smallButtonText}>Login With AWS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                <TouchableOpacity style={styles.privacyPolicyButton} onPress={() => navigation.navigate('Privacy')}>
                    <Text style={styles.privacyPolicyButtonText}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    text_a: {
        color: 'white',
        marginTop: 20,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%', // İstediğiniz yüksekliği ayarlayabilirsiniz
        resizeMode: 'cover',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loggedInContainer: {
        alignItems: 'center',
    },
    loggedInText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    smallButton: {
        backgroundColor: '#FFD700', // Sarı renk
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 5,
        marginTop: 10,
    },
    smallButtonText: {
        color: '#000000', // Siyah renk
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backgroundVideo: {
        ...StyleSheet.absoluteFillObject,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 5,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    forgotPasswordButton: {
        marginTop: 10,
    },
    forgotPasswordButtonText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
    registerButton: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 5,
        marginTop: 10,
    },
    registerButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    awsLoginButton: {
        backgroundColor: '#FFD700', // Sarı renk
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 5,
        marginTop: 10,
    },
    awsLoginButtonText: {
        color: '#000000', // Siyah renk
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    privacyPolicyButton: {
        position: 'absolute',
        bottom: 20,
    },
    privacyPolicyButtonText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});
